const Letter = require("../models/letter");

const createLetter = async (req, res) => {
  const { email, content, scheduledDate } = req.body;

  if (!email || !content || !scheduledDate)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const newLetter = await Letter.create({
      email,
      content,
      scheduledDate,
    });
    res.status(201).json(newLetter);
  } catch (error) {
    res.status(500).json({ message: "Failed to save letter" });
  }
};

<<<<<<< HEAD
module.exports = { createLetter };
=======
module.exports = { createLetter };
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
