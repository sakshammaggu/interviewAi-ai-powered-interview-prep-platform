
# 💻 InterviewAI Frontend

The **InterviewAI Frontend** is a modern, responsive single-page application (SPA) built to deliver a seamless user experience for interview preparation. It features a sleek design using Tailwind CSS and connects to the backend API to serve dynamic AI-generated content.

## 📋 Table of Contents
*   [Tech Stack](#-tech-stack)
*   [Installation & Setup](#-installation--setup)
*   [Folder Structure](#-folder-structure)
*   [Key Components & Pages](#-key-components--pages)
*   [Configuration](#-configuration)
*   [Features](#-features)

---

## 🛠 Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For ultra-fast development and building.
*   **Styling**: 
    *   [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework.
    *   [Framer Motion](https://www.framer.com/motion/) - For smooth animations and transitions.
    *   [React Icons](https://react-icons.github.io/react-icons/) - Icon library.
*   **Routing**: [React Router DOM v7](https://reactrouter.com/) - Client-side routing.
*   **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client.
*   **Notifications**: [React Hot Toast](https://react-hot-toast.com/) - For toast notifications.
*   **Markdown Rendering**: `react-markdown` & `remark-gfm` - For rendering specific AI outputs.

---

## 🚀 Installation & Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend/interview-prep-ai
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173` (default Vite port).

4.  **Build for Production:**
    ```bash
    npm run build
    ```

---

## 📂 Folder Structure

```
src/
├── assets/                 # Static images and assets
├── components/             # Reusable UI components
│   ├── Cards/              # Information & Feature cards
│   ├── Inputs/             # Form input wrappers
│   ├── Layout/             # Navbar, Footer, etc.
│   └── Modal/              # Modal popups
├── context/
│   └── userContext.jsx     # User authentication state management
├── pages/                  # Main Application Pages
│   ├── Home/               # Dashboard and Home views
│   ├── InterviewPrep/      # Main Interview Session Interface
│   ├── LandingPage.jsx     # Public landing page
│   └── Auth/               # Login & Signup forms
├── utils/
│   ├── apiPath.js          # API Endpoint constants
│   ├── axiosInstance.js    # Configured Axios instance with Interceptors
│   ├── helper.js           # Utility functions (validations, formatting)
│   └── uploadImage.js      # Image upload utility
├── App.jsx                 # Main App component & Routes
├── main.jsx                # React Entry point
└── index.css               # Tailwind directives & Global styles
```

---

## 🧱 Key Components & Pages

### **Landing Page (`/`)**
The entry point for unauthorized users. Displays the hero section, features, and provides access to Login/Signup modals.

### **Dashboard (`/dashboard`)**
The central hub for logged-in users.
*   **Create Request**: Form to start a new interview session (Role, Experience, Topics).
*   **Recent Sessions**: List of previous interview sessions.
*   **Pinned Questions**: Quick access to saved questions.

### **Interview Prep (`/interview-prep/:sessionId`)**
The core study interface.
*   **Question List**: Displays generated interview questions.
*   **AI Explanation**: "Ask AI" feature to get conceptual clarity on the current question.
*   **Notes**: Validation and storage for user notes on specific questions.

---

## ⚙️ Configuration

The frontend communicates with the backend via the `axiosInstance` located in `src/utils/axiosInstance.js`.

**Base URL Configuration:**
The API Base URL is currently defined in `src/utils/apiPath.js`.
```javascript
export const BASE_URL = "http://localhost:8000";
```
*Note: Ensure your backend is running on port 8000 or update this value accordingly.*

---

## ✨ Features

*   **Responsive Design**: Mobile-friendly interface optimized for all devices.
*   **Real-time Validations**: Form inputs are validated instantly (e.g., email format, password length).
*   **Secure Route Protection**: `UserProvider` ensures only authenticated users access the Dashboard and Prep pages.
*   **Interactive UI**: Utilizing Framer Motion for engaging entry animations and transitions.
*   **Markdown Support**: AI explanations are rendered beautifully with React Markdown support.
