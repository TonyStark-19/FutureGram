require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const letterRoutes = require("./routes/letterRoutes");
const authRoutes = require("./routes/authRoutes")
require("./scheduler/cronJob"); // run cron

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