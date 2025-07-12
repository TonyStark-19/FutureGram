import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Heart, UploadCloud } from "lucide-react";
import API from "../Api";

const themes = {
  dark: { bg: "#1a1a1a", text: "#ffffff", icon: <Moon size={18} /> },
  white: { bg: "#ffffff", text: "#000000", icon: <Sun size={18} /> },
  rosy: { bg: "#fff0f5", text: "#4b0082", icon: <Heart size={18} /> },
};

const animeImages = [
  { name: "Hitori", url: "/hitori.jpg" },
  { name: "Luffy", url: "/luffy.png" },
  { name: "Naruto", url: "/naruto.png" },
  { name: "Gojo", url: "/gojo.png" },
];

const LetterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
    animeName: animeImages[0].name,
    animePic: animeImages[0].url,
    file: null,
  });

  const [theme, setTheme] = useState("rosy");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        file,
        animePic: preview,
        animeName: "Custom Upload",
      }));
    }
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
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("content", formData.message);
    data.append("scheduledDate", formData.date);
    data.append("animeName", formData.animeName);
    data.append("animePic", formData.animePic);
    if (formData.file) data.append("file", formData.file);

    try {
      const res = await API.post("/letters", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Letter sent successfully!");
      console.log(res.data);
      setFormData({
        name: "",
        email: "",
        date: "",
        message: "",
        animeName: animeImages[0].name,
        animePic: animeImages[0].url,
        file: null,
      });
    } catch (err) {
      alert("Failed to send letter");
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d882ca] via-[#b050bb] to-[#f980e3] flex flex-col items-center justify-center font-poppins px-4 py-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-black">
        💭 "Dear me, I hope you’re smiling today. Remember, you planted this seed."
      </h2>

      <div className="w-full max-w-6xl p-4 sm:p-6 rounded-3xl border border-dashed border-pink-400 bg-gradient-to-br from-purple-600 via-pink-500 to-black shadow-lg">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Message Box */}
          <div
            className="flex-1 rounded-2xl border border-white/30 p-4"
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

          {/* Form Side */}
          <div className="w-full sm:w-64 flex flex-col justify-between items-center gap-4">
            <img
              src={formData.animePic}
              alt="Anime"
              className="w-40 h-40 rounded-xl object-cover border border-white/40 shadow-md"
            />
{/* Anime Pic Dropdown Field */}
  <label className="text-sm text-white">Choose an Anime Pic</label>
  <select
    name="animePic"
    value={formData.animePic}
    onChange={(e) => {
      const selected = animeImages.find((img) => img.url === e.target.value);
      if (selected) {
        setFormData({
          ...formData,
          animePic: selected.url,
          animeName: selected.name,
          file: null,
        });
      }
    }}
    className="w-full px-3 py-2 rounded-md border border-white/20 bg-[#1a1a1a] text-white"
  >
    {animeImages.map((img) => (
      <option key={img.name} value={img.url}>
        {img.name}
      </option>
    ))}
  </select>

{/* Image Upload Field */}
<div className="w-full flex flex-col items-center gap-2">
  <label className="w-full px-3 py-2 bg-[#1a1a1a] text-white rounded-md border border-white/20 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2a2a2a]">
    <UploadCloud size={16} />
    Upload Image
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="hidden"
    />
  </label>
</div>

            {/* Other Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#080808] text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white"
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
