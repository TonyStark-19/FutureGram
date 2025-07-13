const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authControllers");

// Correct usage of router
router.post("/register", register);
router.post("/login", login);

module.exports = router;
