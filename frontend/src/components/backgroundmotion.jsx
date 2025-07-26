import React from "react";

const BackgroundMotion = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 🎨 Top Layer - Brighter Pink Gradient + Silver shimmer */}
      <div
        className="absolute w-[300%] h-full top-0 left-0 animate-waveSlow z-0 opacity-60"
        style={{
          background: "linear-gradient(120deg, #ffe4e1 , #c0c0c0, #ff69b4 )", // 🌸 brighter pink with silver
          clipPath:
            "polygon(0 70%, 10% 72%, 20% 68%, 30% 75%, 40% 70%, 50% 72%, 60% 68%, 70% 75%, 80% 70%, 90% 72%, 100% 68%, 100% 100%, 0% 100%)",
        }}
      />

      {/* 🌺 Second Layer - Deeper Pink Gradient */}
      <div
        className="absolute w-[300%] h-full top-0 left-0 animate-waveFast z-0 opacity-35"
        style={{
          background: "linear-gradient(120deg, #e63e62, #e0218a )", // 💖 deeper pink wave
          clipPath:
            "polygon(0 75%, 10% 70%, 20% 76%, 30% 72%, 40% 75%, 50% 70%, 60% 78%, 70% 72%, 80% 76%, 90% 70%, 100% 75%, 100% 100%, 0% 100%)",
        }}
      />

      {/* ⛱️ Wave Animations */}
      <style>
        {`
          @keyframes waveSlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes waveFast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-waveSlow {
            animation: waveSlow 60s ease-in-out infinite;
          }
          .animate-waveFast {
            animation: waveFast 40s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundMotion;
