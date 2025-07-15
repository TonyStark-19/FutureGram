const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
<<<<<<< HEAD
  email: { type: String, required: true },

  content: { type: String, required: true },

  scheduledDate: { type: Date, required: true },
  
  sent: { type: Boolean, default: false },
=======
  name: {
    type: String,
    default: "Mystery Writer",
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  animePic: {
  type: String,
  default: "https://i.ibb.co/BBRpLkx/default-anime.jpg",
},
animeName: {
  type: String,
},
  sent: {
    type: Boolean,
    default: false,
  },
>>>>>>> future/main
});

module.exports = mongoose.model("Letter", letterSchema);
