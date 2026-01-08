# PowerShell setup script for Windows

Write-Host "Setting up Oddo Full Stack Application..." -ForegroundColor Green

# Check if Docker is running
try {
    docker info | Out-Null
} catch {
    Write-Host "Docker is not running. Please start Docker and try again." -ForegroundColor Red
    exit 1
}

# Start PostgreSQL with Docker Compose
Write-Host "Starting PostgreSQL database..." -ForegroundColor Yellow
docker-compose up -d postgres

# Wait for PostgreSQL to be ready
Write-Host "Waiting for PostgreSQL to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Install frontend dependencies
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location frontend
npm install
Set-Location ..

# Create Python virtual environment
Write-Host "Setting up Python backend..." -ForegroundColor Yellow
Set-Location backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Set-Location ..

Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start the application:" -ForegroundColor Cyan
Write-Host "1. Start backend: cd backend && .\venv\Scripts\Activate.ps1 && uvicorn main:app --reload"
Write-Host "2. Start frontend: cd frontend && npm run dev"
Write-Host ""
Write-Host "Or use Docker Compose: docker-compose up" -ForegroundColor Cyan

