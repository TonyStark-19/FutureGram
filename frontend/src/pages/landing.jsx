import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const rainRef = useRef(null);

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";
      drop.style.left = Math.random() * 100 + "vw";
      drop.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";
      drop.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(drop);
    }
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-[#cdc6cc] via-[#f080e7] to-[#eeceef] text-black font-poppins overflow-hidden">
      {/* Cloud Background Layer */}
      <div className="absolute top-20 left-0 w-full overflow-hidden z-0 h-48 pointer-events-none">
        <div className="relative w-[300%] h-full animate-cloudMove flex items-center gap-8">
          {/* Cloud 1 */}
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-35 w-auto opacity-90"
          />
          {/* Cloud 2 */}
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-45 w-auto opacity-80"
          />
          {/* Cloud 3 */}
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-40 w-auto opacity-85"
          />
          {/* Cloud 4 */}
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-35 w-auto opacity-75"
          />
          {/* Repeat for seamless scroll */}
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-45 w-auto opacity-90"
          />
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-40 w-auto opacity-85"
          />
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-45 w-auto opacity-80"
          />
          <img
            src="/clouds.png"
            alt="cloud"
            className="h-40 w-auto opacity-75"
          />
        </div>
      </div>

      <style>
        {`
    @keyframes cloudMove {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-cloudMove {
      animation: cloudMove 60s linear infinite;
    }
  `}
      </style>

      {/* Rain Container */}
      <div
        ref={rainRef}
        className="absolute inset-0 z-0 pointer-events-none"
      ></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-10 pt-40 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-xl">
          Dear Future Me ✉️
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-10">
          Write a letter to your future self. Reflect, dream, and send it
          through time. One email, infinite impact.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#050405] hover:bg-[#363d61] text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-[0_0_15px_#ba72bc]"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Style for raindrops */}
      <style>
        {`
          .rain-drop {
            position: absolute;
            top: -10px;
            width: 2px;
            height: 15px;
            background: rgba(255, 255, 255, 0.6);
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
