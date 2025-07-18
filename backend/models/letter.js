const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: { type: String, required: true },
    email: { type: String, required: true },
    content: { type: String, required: true },
    scheduledDate: { type: Date, required: true },
    animePic: { type: String, default: "https://i.ibb.co/BBRpLkx/default-anime.jpg" },
    animeName: { type: String, default: "Hitori" },
}, { timestamps: true });
=======
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
>>>>>>> 70be5dc0e008c8ea2b83b3fd04a8764cb102724f

module.exports = mongoose.model("Letter", letterSchema);
