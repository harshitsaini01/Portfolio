import React from "react";

const HireME = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate-pulse">
          Let’s Make Something Together
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Start a{" "}
          <span className="text-purple-500 font-bold underline decoration-wavy">
            Conversation
          </span>
        </p>
      </div>
      <button className="mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-purple-500 hover:bg-purple-4    00 text-white font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-lg shadow-lg hover:scale-105 transition duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400">
        Hire Me Now!
      </button>
    </div>
  );
};

export default HireME;
