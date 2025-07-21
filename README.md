Resume Builder Web Application

--> A fully functional Resume Builder web application that allows users to 
register, log in, create, customize, and download their resumes in real-time
with analytics, AI suggestions, and template previews.

Tech:
Backend
- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT** for secure auth
- **Bcrypt** for password hashing
- **dotenv** for environment configuration
- **CORS** for API security

Frontend
- **React.js**
- **Vite** (for fast development build)
- **Axios** for HTTP requests
- **React Router DOM**
- **Tailwind CSS** *(or regular CSS)*


Project Structure:
Resume_Builder/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── config/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
└── README.md

.env(backend)
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


.env(frontend)
VITE_API_URL=http://localhost:5000

