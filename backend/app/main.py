from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func
from sqlalchemy.orm import Session, joinedload

from .database import Base, engine, get_db
from .eligibility import is_eligible
from .models import Application, Family, FamilyMember, Scheme
from .schemas import ApplicationCreate, ApplicationOut, FamilyCreate, FamilyOut, SchemeCreate, SchemeOut

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Family ID Beneficiary Management API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def next_family_id(db: Session) -> str:
    count = db.query(func.count(Family.id)).scalar() or 0
    return f"GJ-2026-{count + 1:06d}"

def next_application_id(db: Session) -> str:
    count = db.query(func.count(Application.id)).scalar() or 0
    return f"APP-{count + 1001:04d}"

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "family-id-backend"}

@app.post("/api/families", response_model=FamilyOut, status_code=201)
def create_family(payload: FamilyCreate, db: Session = Depends(get_db)):
    family = Family(
        family_id=next_family_id(db),
        head_name=payload.head_name,
        district=payload.district,
        village=payload.village,
        income=payload.income,
        verified=False,
    )
    db.add(family)
    db.flush()

    for member in payload.members:
        db.add(FamilyMember(family_id=family.id, **member.model_dump()))

    db.commit()
    db.refresh(family)
    return family

@app.get("/api/families", response_model=list[FamilyOut])
def list_families(db: Session = Depends(get_db)):
    return db.query(Family).options(joinedload(Family.members)).order_by(Family.id.desc()).all()

@app.get("/api/families/{family_id}", response_model=FamilyOut)
def get_family(family_id: str, db: Session = Depends(get_db)):
    family = (
        db.query(Family)
        .options(joinedload(Family.members))
        .filter(Family.family_id == family_id)
        .first()
    )
    if not family:
        raise HTTPException(404, "Family not found")
    return family

@app.get("/api/families/{family_id}/eligibility")
def get_eligibility(family_id: str, db: Session = Depends(get_db)):
    family = (
        db.query(Family)
        .options(joinedload(Family.members))
        .filter(Family.family_id == family_id)
        .first()
    )
    if not family:
        raise HTTPException(404, "Family not found")

    schemes = db.query(Scheme).options(joinedload(Scheme.rules)).filter(Scheme.status == "Active").all()

    return {
        "family_id": family.family_id,
        "schemes": [
            {
                "scheme_id": scheme.id,
                "scheme": scheme.name,
                "eligible": is_eligible(family, scheme),
                "status": "Potentially Eligible" if is_eligible(family, scheme) else "Not Eligible",
            }
            for scheme in schemes
        ],
    }

@app.post("/api/schemes", response_model=SchemeOut, status_code=201)
def create_scheme(payload: SchemeCreate, db: Session = Depends(get_db)):
    if db.query(Scheme).filter(Scheme.name == payload.name).first():
        raise HTTPException(409, "Scheme already exists")
    scheme = Scheme(**payload.model_dump())
    db.add(scheme)
    db.commit()
    db.refresh(scheme)
    return scheme

@app.get("/api/schemes", response_model=list[SchemeOut])
def list_schemes(db: Session = Depends(get_db)):
    return db.query(Scheme).order_by(Scheme.id.desc()).all()

@app.post("/api/applications", response_model=ApplicationOut, status_code=201)
def create_application(payload: ApplicationCreate, db: Session = Depends(get_db)):
    family = db.query(Family).filter(Family.family_id == payload.family_id).first()
    scheme = db.query(Scheme).filter(Scheme.id == payload.scheme_id).first()

    if not family:
        raise HTTPException(404, "Family not found")
    if not scheme:
        raise HTTPException(404, "Scheme not found")
    if not is_eligible(family, scheme):
        raise HTTPException(400, "Family is not currently eligible for this scheme")

    application = Application(
        application_id=next_application_id(db),
        family_id=family.id,
        scheme_id=scheme.id,
        status="Pending",
    )
    db.add(application)
    db.commit()
    db.refresh(application)

    return ApplicationOut(
        application_id=application.application_id,
        family_id=family.family_id,
        scheme=scheme.name,
        status=application.status,
        applied_at=application.applied_at,
    )

@app.get("/api/applications")
def list_applications(db: Session = Depends(get_db)):
    rows = (
        db.query(Application)
        .options(joinedload(Application.family), joinedload(Application.scheme))
        .order_by(Application.id.desc())
        .all()
    )
    return [
        {
            "application_id": row.application_id,
            "family_id": row.family.family_id,
            "family_name": row.family.head_name,
            "scheme": row.scheme.name,
            "status": row.status,
            "applied_at": row.applied_at,
        }
        for row in rows
    ]
