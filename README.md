# Internship Management System

A modern full-stack Internship Management System built using React.js, Node.js, Express.js, and SQL Server. The platform allows students to upload internship tasks while administrators can review, approve, and manage submissions through a responsive dashboard interface.

---

# Features

## Student Features
- User Registration & Login
- Secure JWT Authentication
- Upload Internship Tasks
- File Upload Support
- View Submitted Tasks
- Track Task Status (Pending / Approved / Rejected)
- Responsive Student Dashboard

## Admin Features
- Secure Admin Login
- View All Submissions
- Approve / Reject Tasks
- Dashboard Analytics
- Charts & Data Visualization
- Submission Management System

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Chart.js
- React Icons

## Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt Password Hashing
- Multer File Upload

## Database
- SQL Server Express

---

# Project Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── sections/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── .gitignore
├── README.md
```

---

# Authentication System

- JWT-based Authentication
- Protected Routes
- Role-based Access
- Password Hashing using Bcrypt

---

# UI Features

- Responsive Design
- Mobile Friendly Layout
- Smooth Navigation
- Interactive Dashboards
- Clean Educational Theme
- Tailwind CSS Styling
- Animated Sections

---

# Security Features

- Environment Variables Protected
- Password Hashing
- JWT Authorization
- Protected Admin Routes
- Secure File Upload Handling

---

# API Routes

## Authentication Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Task Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/tasks/upload` | Upload Task |
| GET | `/api/tasks/my-tasks` | Get Student Tasks |
| GET | `/api/tasks/all` | Get All Tasks |
| PUT | `/api/tasks/status` | Update Task Status |

---

# Future Improvements

- Email Notifications
- Real-Time Dashboard Updates
- Admin Analytics Expansion
- Search & Filtering
- Pagination
- Cloud File Storage
- Deployment Optimization

---

# Author

Developed as a Full-Stack Internship Management System Project using React.js, Node.js, Express.js, and SQL Server.

---

# License

This project is for educational and portfolio purposes.
