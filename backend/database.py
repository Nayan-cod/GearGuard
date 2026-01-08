from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Database URL from environment variables
# Falls back to SQLite if PostgreSQL is not available
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    # Try PostgreSQL first, fallback to SQLite
    try:
        import psycopg2
        DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/oddo_db"
    except ImportError:
        DATABASE_URL = "sqlite:///./oddo.db"

# Use SQLite if DATABASE_URL contains sqlite, otherwise use the provided URL
if "sqlite" in DATABASE_URL.lower():
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
else:
    engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

