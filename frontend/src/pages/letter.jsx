import React, { useState } from "react";

const LetterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Letter submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d882ca] via-[#fce3ff] to-[#f980e3] flex flex-col items-center justify-center font-poppins relative overflow-hidden">
      {/* QUOTE */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        💭 "Dear me, I hope you’re smiling today. Remember, you planted this
        seed."
      </h2>

      {/* OUTER DASHED BOX */}
      <div className="w-full max-w-6xl p-4 sm:p-6 rounded-3xl border border-dashed border-pink-400 bg-gradient-to-br from-purple-600 via-pink-500 to-black">
        {/* INNER FLEX CARD */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* LEFT TEXTAREA */}
          <div className="flex-1 bg-[#faf3f3] rounded-2xl border border-white/30 p-4">
            <h3 className="text-center text-lg font-semibold mb-2">
              Mail Box !!
            </h3>
            <textarea
              name="message"
              placeholder="Write your heartfelt message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={12}
              className="w-full h-full bg-transparent text-black border-none outline-none resize-none"
            />
          </div>

          {/* RIGHT INPUTS COLUMN */}
          <div className="w-full sm:w-64 flex flex-col justify-between items-center gap-4">
            <img
              src="/hitori.jpg" // Replace with the actual file name
              alt="Your Pic"
              className="w-40 h-40 rounded-xl object-cover border border-white/40 shadow-md"
            />

            {/* INPUT FIELDS */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#080808] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* SEND BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md"
            >
              Send 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
