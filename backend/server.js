<<<<<<< HEAD
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
=======
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
>>>>>>> future/main
const cors = require("cors");

const letterRoutes = require("./routes/letterRoutes");
const authRoutes = require("./routes/authRoutes")
require("./scheduler/cronJob"); // run cron

<<<<<<< HEAD
const app = express();

// More specific CORS configuration
app.use(cors({
  origin: ["http://localhost:5173", "https://prsnl-letter.vercel.app"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('DB error:', err));

// Routes
app.use("/api/letters", letterRoutes);

// Add this before your auth routes
app.get('/api/auth/debug', (req, res) => {
  res.json({ message: 'Auth route debugging works!' });
});

app.use('/api/auth', authRoutes); 

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
=======
dotenv.config();

const app = express();

app.use(cors({
  origin: "https://future-gram-wqxe.vercel.app/", // or your frontend URL
  credentials: true
}));
app.use(express.json());

app.use("/api/letters", letterRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("DB error:", err));
>>>>>>> future/main
