@echo off
REM Start the backend development server

REM Navigate to the backend directory
cd apps/backend

REM Activate the virtual environment
call venv\Scripts\activate

REM Run the Django development server
python manage.py runserver
