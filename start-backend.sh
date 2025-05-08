#!/bin/bash
# Start the backend development server

# Navigate to the backend directory
cd apps/backend

# Activate the virtual environment
source venv/bin/activate

# Run the Django development server
python manage.py runserver
