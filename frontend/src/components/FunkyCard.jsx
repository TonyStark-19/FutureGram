// import framer motion
import { motion } from "framer-motion";

// funky card
const FunkyCard = ({ title, message, emoji = "🌈" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0 0 25px rgba(255, 105, 180, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-72 h-40 sm:w-80 sm:h-44 bg-gradient-to-br from-[#ffd6f6] via-[#ffb2e6] to-[#ff9ee2] rounded-2xl p-5 shadow-xl border-2 border-white/30 backdrop-blur-lg text-black font-poppins"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffffff88] to-[#ffffff11] blur-lg z-0 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-center">
        <div className="text-3xl mb-2 animate-bounce">{emoji}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </motion.div>
  );
};

export default FunkyCard;