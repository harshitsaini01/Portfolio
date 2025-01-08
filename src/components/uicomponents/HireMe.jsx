import React from "react";
import { Link } from "react-router-dom";

const HireME = () => {
  return (
    <div className=" text-white py-12 px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-text-shadow">
          Let’s Build Something Amazing
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
          Start a{" "}
          <span className="text-purple-500 font-bold">
            Conversation
          </span>
        </p>
      </div>
      <Link
      to="/contact-me">
      <button className="mt-8 px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400">
        Hire Me Now!
      </button>
      </Link>
    </div>
  );
};

export default HireME;
