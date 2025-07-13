const Letter = require("../models/letter");

exports.createLetter = async (req, res) => {
    try {
        const { name, email, content, scheduledDate, animeName, animePicUrl } = req.body;

        const animePic = animePicUrl || "https://i.ibb.co/BBRpLkx/default-anime.jpg";
        const animeNameFinal = animeName || "Hitori";

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
        console.error("Letter creation error:", err);
        res.status(500).json({ message: "Server error", error: err });
    }
};
