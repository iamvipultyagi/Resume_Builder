// backend/index.js or server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const authRoutes = require("./routes/auth.routes");
const resumeRoutes = require("./routes/resume.routes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));
