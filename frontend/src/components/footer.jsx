import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-gradient-to-r from-[#fbc2eb] via-[#fceabb] to-[#fbc2eb] text-gray-800 py-6 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <p className="text-sm sm:text-base font-semibold">
          Made with <span className="text-pink-600 text-xl">💖</span> by{" "}
          <span className="font-bold text-black">Prarthana</span>
        </p>
        <p className="text-sm text-gray-600 mt-2 sm:mt-0">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
