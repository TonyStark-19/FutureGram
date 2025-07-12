import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import BackgroundMotion from "../components/backgroundmotion"; // ✅ uses same wave bg
import { motion } from "framer-motion";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", form);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-black font-poppins overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f080e7, #ff69b4)", // 🎨 matches login
      }}
    >
      {/* 🌊 Background Waves */}
      <BackgroundMotion />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white p-10 rounded-3xl shadow-xl max-w-md w-full mx-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Join Us ✨</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7] pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#140d14] text-white py-2 rounded-xl 
              shadow-[0_0_30px_rgba(255,255,255,0.2)] 
              hover:bg-[#4f4d4e] transition duration-300 
              hover:shadow-[0_0_20px_#f080e7]"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#f080e7] font-semibold cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
