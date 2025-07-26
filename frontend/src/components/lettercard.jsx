import React from "react";

const LetterCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 overflow-hidden relative p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 space-y-6 z-10">
        <h2 className="text-3xl font-bold text-center text-[#000000] mb-4">
          💌 Compose Your Letter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-1 font-medium text-center text-gray-700"
            >
              Delivery Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-1 font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Letter Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f080e7]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#050405] hover:bg-[#363d61] text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-[0_0_15px_#ba72bc] mx-auto block"
        >
          ✉️ Send Letter
        </button>
      </div>
    </div>
  );
};

export default LetterCard;
