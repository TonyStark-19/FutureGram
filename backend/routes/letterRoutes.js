const express = require("express");
const { createLetter } = require("../controllers/lettersControllers");

const router = express.Router();

router.route("/").post(createLetter)

module.exports = router;
