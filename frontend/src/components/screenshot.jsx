// import motion
import { motion } from "framer-motion";
// import funkycard
import FunkyCard from "./FunkyCard";

// screenshot showcase (preview)
const ScreenshotShowcase = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 pt-24 z-20 w-full">
      {/* 📸 Screenshots Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl py-12 px-4">
        {/* Gradient Behind Screenshots */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffd6f6] via-[#ffe2fc] to-[#f0f0f0] blur-3xl opacity-60 rounded-3xl" />

        {/* Laptop Screenshot - BIGGER */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: -1,
            transition: { type: "spring", stiffness: 180 },
          }}
          className="w-full max-w-[640px] rounded-lg overflow-hidden shadow-2xl border-[3px] border-gray-300"
        >
          <img
            src="/laptop.png"
            alt="Laptop Screenshot"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Mobile Screenshot - SMALLER + Overlapping */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { type: "spring", stiffness: 180 },
          }}
          className="w-full max-w-[140px] -ml-24 mt-[-50px] z-20 rounded-lg overflow-hidden shadow-2xl border-[3px] border-gray-300"
        >
          <img
            src="/mobile.png"
            alt="Mobile Screenshot"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* 💌 Funky Cards Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 mt-20
       w-full max-w-6xl px-4">
        <FunkyCard
          emoji="💌"
          title="Dear Future Me"
          message="Keep glowing, keep growing. One letter, one dream at a time. ✨"
        />
        <FunkyCard
          emoji="💭"
          title="Magical Thoughts"
          message="Your dreams aren't random—they're blueprints for your destiny."
        />
        <FunkyCard
          emoji="🪄"
          title="Made with Love"
          message="Happy to give life to this lovely project. Dreams coded, memories captured!"
        />
      </div>
    </div>
  );
};

export default ScreenshotShowcase;