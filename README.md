# Contract Management System

> NGA Healtcare Project

## Installation

OS X & Linux:

 <!-- ----------------- Frontend Install ----------------- -->

## Backend Setup and Installation

### Prerequisites

- node v20 or above

### Frontend Set Up and Run the Project

1. **Go to the frontend folder**

   ```bash
   cd frontend
   ```

2. **Set up environment variables**
   Create an .env file on the frontend folder

   ```bash
      touch .env
   ```

   Add the following variables to the file:

   - BACKEND_URL=http://localhost:8000
   - NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

3. **Install dependencies**

   ```bash
      npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will start running at `http://192.168.1.70:3000`

<!-- ----------------- Backend Install ----------------- -->

## Backend Setup and Installation

### Prerequisites

- Python 3.9 or higher
- Django 4.2 or higher

### Backend Set Up and Run the Project

1. **Go to the backend folder**

   ```bash
   cd backend
   ```

2. **Set up a Python virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Unix or MacOS
   venv\Scripts\activate  # For Windows
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database**

   Apply the migrations to create your database schema:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the development server**

   ```bash
   python manage.py runserver
   ```

   The application will start running at `http://127.0.0.1:8000/`
