const express = require("express");
const { createLetter } = require("../controllers/lettersControllers");

const router = express.Router();

router.post("/", createLetter);

module.exports = router;
