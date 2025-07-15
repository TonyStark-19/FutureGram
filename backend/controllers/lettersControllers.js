<<<<<<< HEAD
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
=======
const cloudinary = require("../utils/cloudinary");
const Letter = require("../models/letter");

exports.createLetter = async (req, res) => {
  try {
    const { name, email, content, scheduledDate, animeName } = req.body;

    let animePic = req.body.animePic || "https://i.ibb.co/BBRpLkx/default-anime.jpg";
    let animeNameFinal = animeName || "Hitori";

    // If image is uploaded
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      animePic = result.secure_url;
      animeNameFinal = animeName || "Custom Anime";
    }

    const letter = new Letter({
      name,
      email,
      content,
      scheduledDate,
      animePic,
      animeName: animeNameFinal,
    });

    await letter.save();
    res.status(201).json(letter);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
};
>>>>>>> future/main
