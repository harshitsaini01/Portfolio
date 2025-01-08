import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import TypeAnimation from "../components/TypeAnimation";

const Bubble = ({ style }) => {
  const [position, setPosition] = useState({
    top: `${Math.random() * 80 + 5}%`,
    left: `${Math.random() * 80 + 5}%`,
  });

  const handleMouseEnter = () => {
    const randomOffset = () => Math.random() * 2 - 2; 
    setPosition({
      top: `${Math.max(5, Math.min(90, parseFloat(position.top) + randomOffset()))}%`,
      left: `${Math.max(5, Math.min(90, parseFloat(position.left) + randomOffset()))}%`,
    });
  };

  return (
    <motion.div
      className={`bubble absolute w-14 h-14 rounded-full shadow-lg ${style}`}
      style={{
        top: position.top,
        left: position.left,
        position: "absolute",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        opacity: 0.2,
      }}
      animate={{
        top: position.top,
        left: position.left,
      }}
      whileHover={{
        scale: 1.2, 
        transition: { duration: 1, ease: "easeOut" }, 
      }}
      transition={{ duration: 2, type: "spring", stiffness: 50, damping: 15 }} 
      onMouseEnter={handleMouseEnter} 
    />
  );
};

const Homepage = () => {
  const bubbleStyles = [
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-blue-400 to-purple-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-purple-500 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Harshit Saini
          
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mt-4 z-10 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <TypeAnimation />
        </motion.h2>

        <motion.a
          href="#"
          className="mt-8 px-6 py-3 bg-purple-700 text-white rounded-lg text-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300 z-10"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>

        {/* Floating Bubbles */}
        {[...Array(10)].map((_, index) => (
          <Bubble
            key={index}
            style={bubbleStyles[index % bubbleStyles.length]}
          />
        ))}
      </section>
      <section
        id="about"
        className="py-12 px-6 m-4 bg-black flex flex-col md:flex-row items-center justify-center relative"
      >
        <motion.div
          className="absolute inset-0  opacity-20 blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="md:w-1/2 m-10 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-4xl md:text-4xl font-bold text-purple-500 mb-8">
            Let Me Introduce Myself
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto md:mx-0 leading-relaxed">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂
            <br />
            I am fluent in classics like <span className="text-purple-500">C++, JavaScript,</span> and <span className="text-purple-500">Go</span>.
            <br />
            My field of interest includes building new <span className="text-purple-500">Web Technologies</span> and <span className="text-purple-500">Products</span> and exploring <span className="text-purple-500">Blockchain</span>-related areas.
            <br />
            Whenever possible, I also apply my passion for developing products
            using <span className="text-purple-500">Node.js</span> and modern
            JavaScript frameworks like <span className="text-purple-500">React.js</span> and <span className="text-purple-500">Next.js</span>.
          </p>
        </motion.div>
        <motion.img
          src="public/about.png"
          alt="Human working on laptop"
          className="md:w-1/2 w- 64 md:w- 80 mt-12 md:mt-0 z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </section>
      <div className="bg-black text-white flex flex-col items-center py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
        FIND ME ON
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Feel free to <span className="text-purple-500">connect</span> with me
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/harshitsaini01"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white p-4 rounded-full text-3xl hover:bg-purple-600 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/Harshit_saini01?t=rcmq4EhG699XdrczL_KjPQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white p-4 rounded-full text-3xl hover:bg-purple-600 transition-transform transform hover:scale-110"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/harshitsaini01/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white p-4 rounded-full text-3xl hover:bg-purple-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/harshit_saini01?igsh=YXNhcGVkZzAzdnAw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white p-4 rounded-full text-3xl hover:bg-purple-600 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
