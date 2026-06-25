# 🚀 Day 7 – Full Stack Integration & OpenAI/groq API

A complete Full Stack application demonstrating the integration of **React**, **Express.js**, **PostgreSQL**, **Prisma ORM**, **React Query**, and **OpenAI API**.

This project was developed as part of the **AI Full Stack Development Curriculum – Day 7**.

---

# 📖 Project Overview

The objective of this project is to understand how a modern full-stack application works by connecting the frontend, backend, database, and AI services into a single application.

The project demonstrates:

* React Frontend
* Express Backend
* PostgreSQL Database
* Prisma ORM
* REST APIs
* React Query
* CRUD Operations
* OpenAI API Integration
* Prompt Engineering

---

# 🛠 Tech Stack

## Frontend

* React 18
* Vite
* Axios
* React Router DOM
* TanStack React Query
* Tailwind CSS

## Backend

* Node.js
* Express.js
* Prisma ORM
* dotenv
* cors

## Database

* PostgreSQL

## AI

* OpenAI API
or Groq API(free)
---

# 🏗 Project Architecture

```text
React Frontend
      │
      ▼
Axios HTTP Requests
      │
      ▼
Express.js Server
      │
      ▼
Prisma ORM
      │
      ▼
PostgreSQL Database
```

AI Integration

```text
React Chat UI
      │
      ▼
Express AI Route
      │
      ▼
OpenAI API
```

---

# 📂 Folder Structure

```text
day7-project
│
├── client
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── api
│   ├── hooks
│   ├── routes
│   └── App.jsx
│
└── server
    │
    ├── prisma
    │   └── schema.prisma
    │
    ├── routes
    │   ├── users.js
    │   ├── posts.js
    │   └── ai.js
    │
    ├── controllers
    ├── .env
    ├── server.js
    ├── package.json
    └── node_modules
```

---

# ✨ Features

## Backend

* Express REST API
* PostgreSQL Integration
* Prisma ORM
* CRUD Operations
* Error Handling
* Environment Variables

---

## Frontend

* Responsive UI
* React Components
* React Router
* Axios API Calls
* React Query
* Loading & Error States

---

## AI

* OpenAI API Integration
* Prompt Submission
* AI Response Display
* Chat Interface

---

# 📦 Installation

## Clone Repository

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd day7-project
```

---

# Backend Setup

Move into server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start backend:

```bash
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

# Frontend Setup

Open a new terminal.

Move into client:

```bash
cd client
```

Install packages:

```bash
npm install
```

Start React:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# Environment Variables

## Backend (.env)

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/blogdb"

OPENAI_API_KEY=your_openai_api_key

PORT=5000
```

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

# Database

Database Used:

**PostgreSQL**

Tables:

* Users
* Posts
* Comments

Relationships

```text
User
 ├── Posts
 └── Comments

Post
 └── Comments
```

---

# REST API Endpoints

## Users

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/users`     | Fetch all users  |
| GET    | `/users/:id` | Fetch user by ID |
| POST   | `/users`     | Create user      |
| PUT    | `/users/:id` | Update user      |
| DELETE | `/users/:id` | Delete user      |

---

## Posts

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/posts`     | Fetch all posts |
| POST   | `/posts`     | Create post     |
| PUT    | `/posts/:id` | Update post     |
| DELETE | `/posts/:id` | Delete post     |

---

## AI

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | `/ai/ask` | Ask AI a question |

Example Request

```json
{
  "question":"Explain React Hooks"
}
```

Example Response

```json
{
  "answer":"React Hooks allow functional components to use state and lifecycle features."
}
```

---

# React Query

Implemented Concepts

* useQuery()
* useMutation()
* Query Cache
* Cache Invalidation
* Loading States
* Error Handling

Benefits

* Automatic Caching
* Background Refetching
* Optimistic Updates
* Improved Performance

---

# Concepts Covered

### Frontend

* React Components
* Routing
* Axios
* React Query
* Component Reusability

### Backend

* Express.js
* REST APIs
* Middleware
* Error Handling

### Database

* PostgreSQL
* CRUD Operations
* Relationships
* Prisma ORM

### AI

* OpenAI API
* Prompt Engineering
* Chat Interface

---

# Testing

Backend tested using:

* Browser
* Postman

Frontend tested using:

* React Development Server

Database tested using:

* Prisma Client
* PostgreSQL

---

# Learning Outcomes

By completing this project, I learned:

* Full Stack Architecture
* React to Backend Communication
* REST API Development
* PostgreSQL Database Design
* Prisma ORM
* CRUD Operations
* React Query
* Pagination Concepts
* Optimistic Updates
* OpenAI API Integration
* Prompt Engineering

---

# Future Improvements

* User Authentication (JWT)
* Role-Based Authorization
* File Uploads
* Image Storage
* Rich Text Editor
* Search & Filtering
* Infinite Scrolling
* Real-Time Notifications
* Docker Deployment
* CI/CD Pipeline

---

# Author

**Tanishka Jadhav**

AI Full Stack Development Curriculum

**Day 7 – Full Stack Integration & OpenAI API**

---

# License

This project is created for educational purposes as part of the AI Full Stack Development learning program.

---

# ⭐ Project Status

```text
✅ Completed Successfully
```
