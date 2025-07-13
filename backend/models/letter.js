const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    content: { type: String, required: true },
    scheduledDate: { type: Date, required: true },
    animePic: { type: String, default: "https://i.ibb.co/BBRpLkx/default-anime.jpg" },
    animeName: { type: String, default: "Hitori" },
}, { timestamps: true });

module.exports = mongoose.model("Letter", letterSchema);
