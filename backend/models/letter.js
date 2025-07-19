const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
  email: { type: String, required: true },

  content: { type: String, required: true },

  scheduledDate: { type: Date, required: true },
  
  sent: { type: Boolean, default: false },
});

module.exports = mongoose.model("Letter", letterSchema);