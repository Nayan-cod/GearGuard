#!/bin/bash

echo "Setting up Oddo Full Stack Application..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start PostgreSQL with Docker Compose
echo "Starting PostgreSQL database..."
docker-compose up -d postgres

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
sleep 5

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create Python virtual environment
echo "Setting up Python backend..."
cd backend
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
pip install -r requirements.txt
cd ..

echo "Setup complete!"
echo ""
echo "To start the application:"
echo "1. Start backend: cd backend && source venv/bin/activate && uvicorn main:app --reload"
echo "2. Start frontend: cd frontend && npm run dev"
echo ""
echo "Or use Docker Compose: docker-compose up"

