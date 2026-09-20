from datetime import datetime
from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .database import Base

class Family(Base):
    __tablename__ = "families"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    family_id: Mapped[str] = mapped_column(String(30), unique=True, index=True)
    head_name: Mapped[str] = mapped_column(String(150))
    district: Mapped[str] = mapped_column(String(100))
    village: Mapped[str] = mapped_column(String(150))
    income: Mapped[float] = mapped_column(Float)
    verified: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    members = relationship("FamilyMember", back_populates="family", cascade="all, delete-orphan")
    applications = relationship("Application", back_populates="family", cascade="all, delete-orphan")

class FamilyMember(Base):
    __tablename__ = "family_members"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    family_id: Mapped[int] = mapped_column(ForeignKey("families.id", ondelete="CASCADE"))
    name: Mapped[str] = mapped_column(String(150))
    age: Mapped[int] = mapped_column(Integer)
    gender: Mapped[str] = mapped_column(String(20))
    relationship: Mapped[str] = mapped_column(String(50))
    occupation: Mapped[str] = mapped_column(String(100))
    education: Mapped[str] = mapped_column(String(100))

    family = relationship("Family", back_populates="members")

class Scheme(Base):
    __tablename__ = "schemes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), unique=True)
    department: Mapped[str] = mapped_column(String(150))
    description: Mapped[str] = mapped_column(Text)
    category: Mapped[str] = mapped_column(String(100))
    beneficiaries: Mapped[int] = mapped_column(Integer, default=0)
    status: Mapped[str] = mapped_column(String(20), default="Active")

    rules = relationship("SchemeRule", back_populates="scheme", cascade="all, delete-orphan")
    applications = relationship("Application", back_populates="scheme")

class SchemeRule(Base):
    __tablename__ = "scheme_rules"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    scheme_id: Mapped[int] = mapped_column(ForeignKey("schemes.id", ondelete="CASCADE"))
    attribute: Mapped[str] = mapped_column(String(100))
    operator: Mapped[str] = mapped_column(String(10))
    value: Mapped[str] = mapped_column(String(200))

    scheme = relationship("Scheme", back_populates="rules")

class Application(Base):
    __tablename__ = "applications"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    application_id: Mapped[str] = mapped_column(String(30), unique=True, index=True)
    family_id: Mapped[int] = mapped_column(ForeignKey("families.id", ondelete="CASCADE"))
    scheme_id: Mapped[int] = mapped_column(ForeignKey("schemes.id"))
    status: Mapped[str] = mapped_column(String(30), default="Pending")
    applied_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    family = relationship("Family", back_populates="applications")
    scheme = relationship("Scheme", back_populates="applications")
