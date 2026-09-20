# Family ID Backend

FastAPI + PostgreSQL backend for the Gujarat Family ID beneficiary-management prototype.

## 1. Start PostgreSQL

Docker Desktop must be running.

```bash
docker compose up -d
```

## 2. Create Python environment

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

## 4. Start API

```bash
uvicorn app.main:app --reload
```

API:
http://localhost:8000

Swagger:
http://localhost:8000/docs

Health:
http://localhost:8000/api/health

## Frontend

The frontend should run on:

http://localhost:3000

CORS is configured for that origin.

## Important

This is a development prototype. It does not implement government identity integrations, production authentication, authorization, encryption/key management, audit controls, consent workflows, or scheme-specific legal verification.
