import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Heart } from "lucide-react";
import API from "../api"; // this connects axios to your backend

const themes = {
  dark: {
    bg: "#1a1a1a",
    text: "#ffffff",
    icon: <Moon size={18} />,
  },
  white: {
    bg: "#ffffff",
    text: "#000000",
    icon: <Sun size={18} />,
  },
  rosy: {
    bg: "#fff0f5",
    text: "#4b0082",
    icon: <Heart size={18} />,
  },
};

const LetterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const [theme, setTheme] = useState("rosy");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inspireMessages = [
    "🌸 Keep blooming, even in the dark.",
    "🚀 You’re stronger than you think.",
    "💫 Your future self is proud of you.",
    "🔥 Nothing can dim your light.",
  ];

  const handleInspire = () => {
    const random = Math.floor(Math.random() * inspireMessages.length);
    setFormData({ ...formData, message: inspireMessages[random] });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      email: formData.email,
      content: formData.message,
      scheduledDate: formData.date,
    };

    const res = await API.post("/letters", payload); // 🔗 sending to backend
    alert("Letter sent successfully!");
    console.log("Saved:", res.data);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      date: "",
      message: "",
    });
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
    alert("Failed to send letter");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d882ca] via-[#fce3ff] to-[#f980e3] flex flex-col items-center justify-center font-poppins px-4 py-12">
      {/* Quote */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-black">
        💭 "Dear me, I hope you’re smiling today. Remember, you planted this seed."
      </h2>

      {/* Container */}
      <div className="w-full max-w-6xl p-4 sm:p-6 rounded-3xl border border-dashed border-pink-400 bg-gradient-to-br from-purple-600 via-pink-500 to-black shadow-lg">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Message Box */}
          <div
            className="flex-1 rounded-2xl border border-white/30 p-4 transition-all duration-300"
            style={{
              backgroundColor: themes[theme].bg,
              color: themes[theme].text,
            }}
          >
            <h3 className="text-center text-lg font-semibold mb-2">Mail Box 📬</h3>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your heartfelt message..."
              rows={10}
              className="w-full h-full bg-transparent border-none outline-none resize-none text-base"
              style={{ color: themes[theme].text }}
            />

            {/* Theme Icons + Inspire */}
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-sm text-white">Theme:</span>
              {Object.entries(themes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  className={`w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow transition hover:scale-105 ${
                    theme === key ? "ring-2 ring-yellow-300" : ""
                  }`}
                >
                  {value.icon}
                </button>
              ))}

              <button
                onClick={handleInspire}
                className="bg-yellow-200 text-black text-xs px-3 py-1 rounded-md shadow hover:bg-yellow-300"
              >
                ✨ Inspire Me
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="w-full sm:w-64 flex flex-col justify-between items-center gap-4">
            <img
              src="/hitori.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-xl object-cover border border-white/40 shadow-md"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#080808] text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none"
            />

            <motion.button
              onClick={handleSubmit}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md"
            >
              Send 🚀
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
