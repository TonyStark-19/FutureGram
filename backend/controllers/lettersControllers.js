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

module.exports = { createLetter };
