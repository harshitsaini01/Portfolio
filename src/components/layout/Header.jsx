import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-500 pl-10 hover:scale-110 transition-transform duration-300">
        PORTFOLIO
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-10 text-white items-center ml-6">
        <Link
          to="/"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">home</span>
            <span>Home</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/about"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">person</span>
            <span>About</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/project"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">collections</span>
            <span>Projects</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/resume"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">description</span>
            <span>Resume</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          to="/blogs"
          className="flex flex-col items-center text-lg hover:text-purple-500 group"
        >
          <span className="flex items-center space-x-1">
            <span className="material-icons">edit</span>
            <span>Blogs</span>
          </span>
          <span className="block w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>

      {/* GitHub and Star Button */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="https://github.com/harshitsaini01/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
        >
          Git ⭐
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="flex md:hidden">
        <button className="text-white">☰</button>
      </div>
    </nav>
  );
}
