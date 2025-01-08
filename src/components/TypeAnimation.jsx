import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypeAnimation = () => {
  const texts = [
    "A Passionate Software Developer",
    "A MERN Developer",
    "A Creative Problem Solver",
  ]; 
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentIndex];
      if (!isDeleting) {
        // Typeeee
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100); // type speedd
        if (currentText === fullText) {
          // Pause at full text
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleteeee
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50); // delete speed
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, currentIndex, isDeleting, texts, typingSpeed]);

  return (
    <motion.h2
      className="text-2xl md:text-4xl mt-4 z-10 text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {currentText}
      <span className="border-r-2 border-purple-500 animate-blink ml-1"></span>
    </motion.h2>
  );
};

export default TypeAnimation;
