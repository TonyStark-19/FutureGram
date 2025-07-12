const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const letterRoutes = require("./routes/letterRoutes");
const authRoutes = require("./routes/authRoutes")
require("./scheduler/cronJob"); // run cron

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
