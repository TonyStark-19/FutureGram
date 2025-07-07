import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white font-[Poppins] flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-yellow-300 mb-4 animate-pulse">
          Dear Future Me 💌
        </h1>

        <p className="text-lg text-gray-300 text-center mb-6">
          Write a letter to your future self and schedule it to be delivered later. A gift from today's you 💫
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <textarea
            rows="6"
            placeholder="Write your letter here..."
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>

          <input
            type="date"
            className="p-3 rounded-lg bg-white/20 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Schedule Letter 🚀
          </button>
        </form>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        Made with 💛 by Prarthana
      </footer>
    </div>
  );
}

export default App;
