import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Section */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold text-purple-500 hover:scale-110 transition-transform duration-300">
            PORTFOLIO
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 text-sm text-black focus:outline-none rounded-lg w-full sm:w-auto"
            />
            <button className="bg-purple-700 px-5 py-2 text-white font-bold rounded-lg sm:ml-4 hover:bg-purple-600 hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center and Right Section */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <Link to="/about" className="hover:text-purple-500">
                <li>About</li>
              </Link>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <Link to="/contact" className="hover:text-purple-500">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Learn</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <Link to="/blogs" className="hover:text-purple-500">
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-purple-500">AML Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-center sm:text-left">Statutory legal information</p>
        <p className="text-center sm:text-right mt-4 sm:mt-0">
          2024-2025 Harshit-Portfolio | Site Map | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
