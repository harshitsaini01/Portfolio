import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white ">
      <section
        id="contact"
        className="py-5 px-6 bg-black text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute w-10 h-10 bg-purple-600 rounded-full opacity-30 animate-float"
          style={{ top: "10%", left: "15%" }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-float-slow"
          style={{ bottom: "20%", right: "10%" }}
        />
        <motion.div
          className="absolute w-12 h-12 bg-purple-700 rounded-full opacity-40 animate-float-fast"
          style={{ bottom: "30%", left: "40%" }}
        />
        
        <div className="flex justify-center z-10">
        <h3 className="text-3xl mr-20 mt-2 font-bold text-center text-purple-500">
          Get In Touch
        </h3>
          <motion.a
            href="mailto:harshitsaini0019@gmail.com"
            className="px-6 py-3 bg-purple-700 text-white rounded-lg text-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.a>
        </div>
        <div className="border-t border-gray-400 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-center sm:text-left">Statutory legal information</p>
        <p className="text-center sm:text-right sm:mt-0">
          2024-2025 Harshit-Portfolio | Site Map | Privacy Policy
        </p>
      </div>
      </section>
    </footer>
  );
};
export default Footer;
