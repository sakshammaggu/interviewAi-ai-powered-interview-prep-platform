
# 🧠 InterviewAI - AI-Powered Interview Prep Platform

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Stack](https://img.shields.io/badge/stack-MERN-green.svg)

**InterviewAI** is a comprehensive, full-stack web application designed to supercharge your technical interview preparation. Leveraging the power of OpenAI's GPT models, it provides personalized interview questions, detailed conceptual explanations, and a structured environment to practice and track your progress.

---

## 🏗️ Architecture Overview

The platform uses a modern **Client-Server** architecture:

*   **Frontend**: Built with **React 19** and **Vite**, featuring a responsive UI compliant with modern web standards, styled using **Tailwind CSS v4** and **Framer Motion** for animations. It manages user state via Context API and communicates with the backend via a centralized Axios instance.
*   **Backend**: A robust REST API built on **Node.js** and **Express**. It handles authentication (JWT), data persistence (MongoDB), and orchestrates calls to the OpenAI API.
*   **Database**: **MongoDB** is used as the document store, managing Users, Sessions, and Questions with structured Mongoose schemas.
*   **AI Integration**: The system directly integrates with **OpenAI API** (`gpt-4o-mini`) to dynamically generate context-aware interview questions and clear, concise technical explanations.

---

## 🛠️ Technology Stack

### **Frontend**
*   **Core**: React 19, JavaScript (ES6+)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS v4, Framer Motion, React Icons
*   **Routing**: React Router DOM v7
*   **State Management**: React Context API
*   **HTTP Client**: Axios

### **Backend**
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database ODM**: Mongoose
*   **Authentication**: JWT (JSON Web Tokens), bcryptjs
*   **AI Engine**: OpenAI SDK

### **Database & Tools**
*   **Database**: MongoDB (Atlas or Local)
*   **Version Control**: Git

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16+ recommended)
*   [MongoDB](https://www.mongodb.com/) (Local instance or Atlas Connection URI)
*   [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone <repository_url>
cd interviewAi-ai-powered-interview-prep-platform
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and start the server.

```bash
cd backend
npm install
```

**Environment Configuration:**
Create a `.env` file in the `backend` directory with the following keys:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/interviewai # or your Atlas URI
JWT_SECRET=your_super_secret_jwt_key
OPENAI_API_KEY=your_openai_api_key
```

**Start the Server:**
```bash
npm start
# OR for development with hot-reload
npm run dev
```
*The backend API will run on `http://localhost:8000`.*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and run the development server.

```bash
cd frontend/interview-prep-ai
npm install
npm run dev
```
*The application will typically launch at `http://localhost:5173`.*

---

## 🔑 Key Features
*   **🔐 Secure AI Authentication**: Robust Signup and Login system using JWT.
*   **📝 AI-Generated Mock Interviews**: Create custom interview sessions based on Role, Experience Level, and Focus Topics.
*   **💡 Instant Concept Explanations**: Ask any technical question and get an AI-powered explanation instantly.
*   **📊 Dashboard & History**: Track your past interview sessions and review pinned questions.
*   **📌 Pin & Notes**: Save important questions and add personalized notes for revision.
*   **🖼️ Profile Management**: Update your profile and upload a profile picture.

---

## ⚙️ Environment Variables Reference

| Variable | Description | Required |
| :--- | :--- | :--- |
| `PORT` | Port for the backend server (default: 8000) | No |
| `MONGO_URI` | MongoDB connection string | **Yes** |
| `JWT_SECRET` | Secret key for signing JWT tokens | **Yes** |
| `OPENAI_API_KEY` | API Key for OpenAI integration | **Yes** |

---

## 📂 Repository Structure

```
/
├── backend/                # Express API Backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Request logic (Auth, AI, Sessions)
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Endpoints
│   ├── middleware/         # Auth & Error handling
│   └── server.js           # Entry point
│
├── frontend/               # Frontend Logic
│   └── interview-prep-ai/  # React Vite Application
│       ├── src/
│       │   ├── components/ # Reusable UI components
│       │   ├── pages/      # Route pages (Dashboard, Landing, etc.)
│       │   ├── utils/      # API setup & helpers
│       │   └── context/    # Global State
│       └── ...
└── README.md               # You are here
```

---

## 🤝 Contribution

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

---

## ⚖️ License
This project is licensed under the **ISC License**.
