import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import BackgroundMotion from "../components/backgroundmotion";
import { motion } from "framer-motion";
import Api from '../Api'
import Header from "../components/Header";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post("/auth/register", form);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", form.email); // Store email in localStorage

      setAlert({ type: "success", message: `💖 Registered, ${user.username}!` });
      setTimeout(() => {
        navigate("/letter");
      }, 1500);
    } catch (err) {
      setAlert({
        type: "error",
        message:
          err.response?.data?.message ||
          "⚠ Registration failed. Please check your credentials.",
      });
    }
  };

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen flex items-center justify-center text-black font-poppins overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f080e7, #ff69b4)",
        }}
      >
        <BackgroundMotion />
        {alert.message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mb-4 px-4 py-2 rounded-xl text-sm font-medium text-center ${
              alert.type === "success"
                ? "bg-pink-200 text-pink-800 shadow-[0_0_20px_#ff9ddc]"
                : "bg-red-100 text-red-600 shadow-[0_0_20px_#f08080]"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-white p-10 rounded-3xl shadow-xl max-w-md w-full mx-4"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Join Us ✨</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
              />
            </div>
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
    </>
  );
};

export default RegisterPage;