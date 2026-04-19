# School Management System

A comprehensive, production-ready full-stack School Management System built with the MERN stack (MongoDB, Express, React, Node.js). 

This project follows an MVC architecture on the backend and features a modern, responsive single-page application (SPA) on the frontend. It includes role-based access control with distinct dashboards for Admin, Teacher, and Student roles.

## Features

- **Role-Based Authentication**: Secure JWT-based login for Admins, Teachers, and Students.
- **Admin Dashboard**: Manage users, oversee classes, and view high-level school analytics.
- **Teacher Dashboard**: View daily schedules, manage attendance, and grade assignments.
- **Student Dashboard**: Real-time view of attendance, grades, and upcoming timetable.
- **Modern UI/UX**: Premium aesthetic built using Vanilla CSS and Recharts, utilizing responsive dynamic grids and subtle animations.
- **RESTful API**: Well-structured MVC backend with Mongoose models for robust data management.

## Project Structure

```text
school-management-system/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic for each entity
│   ├── middleware/      # Auth and Role guards
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # Express routing layer
│   ├── utils/           # Database seeders
│   ├── .env             # Environment variables (Add your DB URI here)
│   └── server.js        # Main Express application entry point
├── frontend/
│   ├── src/
│   │   ├── api/         # Axios global configuration
│   │   ├── components/  # Reusable UI (Sidebar, Topbar, Layout)
│   │   ├── context/     # React Context for Global Auth State
│   │   ├── pages/       # Dashboards and Auth Pages
│   │   ├── App.jsx      # React Router definition
│   │   └── index.css    # Global CSS and theming variables
└── README.md
```

## Setup Instructions

### 1. Database Configuration
You will need a MongoDB instance. 
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or run a local instance.
2. In the `backend/.env` file, set your `MONGO_URI`:
   ```env
   MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/school-management?retryWrites=true&w=majority
   JWT_SECRET=YOUR_SUPER_SECRET_KEY
   PORT=5000
   ```

### 2. Backend Installation
Open a terminal in the `backend` directory:
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Installation
Open a terminal in the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```

### 4. Seeding Initial Data
You can run the seed script to populate your database with dummy data and initial admin credentials.
```bash
cd backend
node utils/seed.js
```

## Dummy Credentials (After Seeding)

- **Admin**: admin@school.com / password123
- **Teacher**: teacher1@school.com / password123
- **Student**: student1@school.com / password123

## Technologies Used
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- Frontend: React (Vite), React Router, Context API, Axios, Lucide-React, Recharts
