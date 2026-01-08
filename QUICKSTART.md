# Quick Start Guide

## Fastest Way to Get Started (Using Docker)

1. **Start the database:**
   ```bash
   docker-compose up -d postgres
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Set up Python backend:**
   ```bash
   cd backend
   python -m venv venv
   
   # On Windows:
   .\venv\Scripts\Activate.ps1
   
   # On Mac/Linux:
   source venv/bin/activate
   
   pip install -r requirements.txt
   cd ..
   ```

4. **Start the backend (in one terminal):**
   ```bash
   cd backend
   source venv/bin/activate  # or .\venv\Scripts\Activate.ps1 on Windows
   uvicorn main:app --reload
   ```

5. **Start the frontend (in another terminal):**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API Docs: http://localhost:8000/docs

## Using Docker Compose for Everything

If you want to run everything with Docker:

```bash
docker-compose up
```

Then in another terminal:
```bash
cd frontend
npm install
npm run dev
```

## Troubleshooting

### Database Connection Issues
- Make sure PostgreSQL is running
- Check that the DATABASE_URL in `backend/.env` matches your database credentials
- If using Docker, ensure the postgres container is healthy: `docker-compose ps`

### Port Already in Use
- Change the port in `docker-compose.yml` or in the respective config files
- Frontend: Edit `frontend/package.json` scripts
- Backend: Change port in `uvicorn` command or `docker-compose.yml`

### Module Not Found Errors
- Make sure you've installed all dependencies:
  - Frontend: `npm install` in the `frontend` directory
  - Backend: `pip install -r requirements.txt` in the `backend` directory

