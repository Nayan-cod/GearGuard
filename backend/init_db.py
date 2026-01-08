"""
Database initialization script.
Run this to create all tables in the database.
"""
from database import Base, engine
from models import Item

print("Creating database tables...")
Base.metadata.create_all(bind=engine)
print("Database tables created successfully!")

