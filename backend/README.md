
# 🔙 InterviewAI Backend API

The backend for **InterviewAI** provides a robust, RESTful API derived to power the interview preparation platform. It handles user authentication, session management, and interfaces with OpenAI to generate intelligent interview content.

## 📋 Table of Contents
*   [Tech Stack](#-tech-stack)
*   [Installation & Setup](#-installation--setup)
*   [Project Structure](#-project-structure)
*   [API Documentation](#-api-documentation)
    *   [Authentication](#authentication)
    *   [AI Generation](#ai-generation)
    *   [Sessions](#sessions)
    *   [Questions](#questions)
*   [Database Models](#-database-models)

---

## 🛠 Tech Stack

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated web framework for Node.js.
*   **MongoDB & Mongoose**: NoSQL database and Object Data Modeling (ODM) library.
*   **JWT (JSON Web Tokens)**: Secure user authentication.
*   **Bcrypt.js**: Password hashing for security.
*   **OpenAI SDK**: Integration with GPT models.
*   **Multer**: Handling file uploads (profile images).

---

## 🚀 Installation & Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root of the `backend` folder and add the following:
    ```env
    PORT=8000
    MONGO_URI=mongodb://127.0.0.1:27017/interviewai
    JWT_SECRET=your_jwt_secret_key_here
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4.  **Run the Server:**
    *   **Development Mode** (requires nodemon):
        ```bash
        npm run dev
        ```
    *   **Production Mode**:
        ```bash
        npm start
        ```

    *Server runs on `http://localhost:8000` by default.*

---

## 📂 Project Structure

```
backend/
├── config/
│   └── db.js               # MongoDB connection logic
├── controllers/            # Route controllers
│   ├── aiController.js     # Logic for AI generation
│   ├── authController.js   # Logic for User Auth (Register, Login)
│   ├── questionController.js # Logic for adding/updating questions
│   └── sessionController.js # Logic for managing interview sessions
├── middleware/
│   └── authMiddleware.js   # JWT verification middleware
├── models/                 # Mongoose Data Models
│   ├── Question.js
│   ├── Session.js
│   └── User.js
├── routes/                 # API Routes definitions
│   ├── authRoutes.js
│   ├── sessionRoutes.js
│   └── questionRoutes.js
├── uploads/                # Directory for uploaded files
├── utils/                  # Helper functions & AI prompts
├── server.js               # Main application entry point
└── package.json            # Dependencies and scripts
```

---

## 📡 API Documentation

### Authentication
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Login and receive JWT | No |
| `GET` | `/api/auth/profile` | Get current user profile | **Yes** |
| `POST` | `/api/auth/upload-image` | Upload profile picture | **Yes** |

### AI Generation
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/ai/generate-questions` | Generate tailored interview questions | **Yes** |
| `POST` | `/api/ai/generate-explanation`| Explain a specific concept | **Yes** |

### Sessions
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/sessions/create` | Create a new interview session | **Yes** |
| `GET` | `/api/sessions/my-sessions` | Get all sessions for the user | **Yes** |
| `GET` | `/api/sessions/:id` | Get specific session details | **Yes** |
| `DELETE`| `/api/sessions/:id` | Delete a session | **Yes** |

### Questions
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/questions` | Get questions (filtered) | **Yes** |
| `POST` | `/api/questions/add` | Add a manual question to a session | **Yes** |
| `PUT` | `/api/questions/:id/pin` | Pin/Unpin a question | **Yes** |
| `PUT` | `/api/questions/:id/note` | Add a note to a question | **Yes** |

---

## 🗄️ Database Models

### User Model
*   `fullName`: String
*   `email`: String (Unique)
*   `password`: String (Hashed)
*   `profileImageUrl`: String
*   `createdOn`: Date

### Session Model
*   `userId`: ObjectId (Ref: User)
*   `role`: String
*   `experience`: String
*   `topics`: String
*   `questions`: Array of ObjectIds (Ref: Question)
*   `createdOn`: Date

### Question Model
*   `sessionId`: ObjectId (Ref: Session)
*   `question`: String
*   `answer`: String
*   `isPinned`: Boolean
*   `userNote`: String
*   `createdOn`: Date
