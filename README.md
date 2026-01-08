# Oddo Full Stack Application

A modern full-stack web application built with Next.js, Python FastAPI, and PostgreSQL.

## Features

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Python FastAPI with SQLAlchemy ORM
- **Database**: PostgreSQL
- **Docker**: Containerized setup for easy development

## Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- Docker and Docker Compose (optional, for containerized setup)
- PostgreSQL (if not using Docker)

## Setup Instructions

### Option 1: Using Docker (Recommended)

1. **Start all services with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Option 2: Manual Setup

1. **Set up PostgreSQL:**
   - Install PostgreSQL
   - Create a database:
     ```sql
     CREATE DATABASE oddo_db;
     ```

2. **Set up Backend:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Initialize the database:**
   ```bash
   python init_db.py
   ```

5. **Run the backend:**
   ```bash
   uvicorn main:app --reload
   ```

6. **Set up Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Project Structure

```
oddo/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   └── package.json
├── backend/          # Python FastAPI backend
│   ├── main.py      # FastAPI application
│   ├── models.py    # SQLAlchemy models
│   ├── schemas.py   # Pydantic schemas
│   ├── database.py  # Database configuration
│   └── requirements.txt
├── docker-compose.yml
└── README.md
```

## API Endpoints

- `GET /` - API root
- `GET /api/items` - Get all items
- `GET /api/items/{id}` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/{id}` - Update item
- `DELETE /api/items/{id}` - Delete item
- `GET /api/health` - Health check

## Development

- Frontend runs on port 3000
- Backend runs on port 8000
- PostgreSQL runs on port 5432

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Axios
- **Backend**: FastAPI, SQLAlchemy, Pydantic, Uvicorn
- **Database**: PostgreSQL
- **DevOps**: Docker, Docker Compose

