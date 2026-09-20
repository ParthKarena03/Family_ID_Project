from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field

class MemberCreate(BaseModel):
    name: str
    age: int = Field(ge=0, le=120)
    gender: str
    relationship: str
    occupation: str
    education: str

class MemberOut(MemberCreate):
    id: int
    model_config = ConfigDict(from_attributes=True)

class FamilyCreate(BaseModel):
    head_name: str
    district: str
    village: str
    income: float = Field(ge=0)
    members: list[MemberCreate] = []

class FamilyOut(BaseModel):
    id: int
    family_id: str
    head_name: str
    district: str
    village: str
    income: float
    verified: bool
    created_at: datetime
    members: list[MemberOut] = []
    model_config = ConfigDict(from_attributes=True)

class SchemeCreate(BaseModel):
    name: str
    department: str
    description: str
    category: str
    beneficiaries: int = 0
    status: str = "Active"

class SchemeOut(SchemeCreate):
    id: int
    model_config = ConfigDict(from_attributes=True)

class ApplicationCreate(BaseModel):
    family_id: str
    scheme_id: int

class ApplicationOut(BaseModel):
    application_id: str
    family_id: str
    scheme: str
    status: str
    applied_at: datetime
