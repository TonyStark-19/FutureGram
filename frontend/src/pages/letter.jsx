// app/page.tsx (Next.js + TypeScript)

"use client";
import React, { useEffect } from "react";
import LetterCard from "../components/lettercard.jsx";

export default function Home() {
  useEffect(() => {
    const bubbleContainer = document.querySelector(".bubble-container");
    if (!bubbleContainer) return;

    for (let i = 0; i < 35; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 80 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${4 + Math.random() * 4}s`;
      bubble.style.animationDelay = `${Math.random() * 2}s`;

      // optional image bubble
      if (Math.random() > 0.7) {
        bubble.style.backgroundImage = "url('/bubble.png')";
        bubble.style.backgroundSize = "cover";
        bubble.style.backgroundColor = "transparent";
      }

      bubbleContainer.appendChild(bubble);
    }
  }, []);

  return (
    <main className="main">
      <div className="bubble-container" />
      <LetterCard />

      <style jsx>{`
        .main {
          height: 100vh;
          background: linear-gradient(135deg, #cdc6cc, #f080e7 60%, #eeceef);
          overflow: hidden;
          position: relative;
          font-family: "Poppins", sans-serif;
        }

        .bubble-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .bubble {
          position: absolute;
          bottom: -100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff99cc, #d500f9);
          opacity: 0.6;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.6),
                      0 0 40px rgba(255, 0, 255, 0.4);
          animation: rise linear infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-110vh) scale(1.2);
          }
        }

        .center-box {
          z-index: 2;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 2rem 3rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(255, 0, 128, 0.3);
          text-align: center;
        }

        .heading {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px #ff66cc;
        }

        .description {
          font-size: 1.2rem;
          color: #eeeeee;
          margin-bottom: 2rem;
        }

        .cta-button {
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 30px;
          background: linear-gradient(135deg, #ff4ecb, #c500ec);
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 0 15px rgba(255, 0, 150, 0.4);
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 0, 180, 0.6);
        }
      `}</style>
    </main>
  );
}
