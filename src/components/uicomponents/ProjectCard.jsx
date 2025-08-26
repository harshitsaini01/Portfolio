import React, { useEffect, useState } from "react";
import { FaGithub, FaTimes, FaExternalLinkAlt, FaCode, FaRocket, FaLaptopCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({
  images = [],
  title = "Default Title",
  description = "No description available",
  github,
  demo,
  readMore,
  details,
}) => {
  if (!Array.isArray(images)) {
    console.error("The `images` prop must be an array. Received:", images);
    return null;
  }

  const imagesWithLoop = [...images, images[0]];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        handleNextImage();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentImageIndex, images]);

  const handleNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentImageIndex === images.length - 1) {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 1500);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  // Parse details to add icons and formatting without bullet points
  const formatDetails = (details) => {
    if (!details) return "";
    
    return details
      .replace(/💰/g, '<span class="feature-icon">💰</span>')
      .replace(/📋/g, '<span class="feature-icon">📋</span>')
      .replace(/🔐/g, '<span class="feature-icon">🔐</span>')
      .replace(/📊/g, '<span class="feature-icon">📊</span>')
      .replace(/💳/g, '<span class="feature-icon">💳</span>')
      .replace(/🎓/g, '<span class="feature-icon">🎓</span>')
      .replace(/🏢/g, '<span class="feature-icon">🏢</span>')
      .replace(/💻/g, '<span class="feature-icon">💻</span>')
      .replace(/📝/g, '<span class="feature-icon">📝</span>')
      .replace(/🔄/g, '<span class="feature-icon">🔄</span>')
      .replace(/👥/g, '<span class="feature-icon">👥</span>')
      .replace(/📁/g, '<span class="feature-icon">📁</span>')
      .replace(/🎨/g, '<span class="feature-icon">🎨</span>')
      .replace(/🎯/g, '<span class="feature-icon">🎯</span>')
      .replace(/🧩/g, '<span class="feature-icon">🧩</span>')
      .replace(/🎮/g, '<span class="feature-icon">🎮</span>')
      .replace(/Frontend/g, '<strong class="text-purple-600">Frontend</strong>')
      .replace(/Backend/g, '<strong class="text-indigo-600">Backend</strong>')
      .replace(/Development Tools/g, '<strong class="text-green-600">Development Tools</strong>')
      .replace(/Deployment & Infrastructure/g, '<strong class="text-orange-600">Deployment & Infrastructure</strong>');
  };

  return (
    <>
      <motion.div 
        className="card bg-gradient-to-b from-purple-900 via-indigo-800 to-purple-700 text-white w-full max-w-sm h-[580px] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto relative card-hover"
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-[180px] overflow-hidden mx-auto mt-4">
          <div
            className={`absolute top-0 left-0 h-full w-full flex ${
              isTransitioning ? "transition-transform duration-[1500ms]" : ""
            } ease-in-out`}
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {imagesWithLoop.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0 rounded-xl border-2 border-purple-300 shadow-md"
                style={{ width: "100%" }}
              />
            ))}
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-center">
              {title}
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">{description}</p>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-3">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-6 mr-[5px]" /> GitHub
              </motion.a>
            )}
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="h-6 mr-[5px]" /> Demo
              </motion.a>
            )}
            {details && (
              <motion.button
                onClick={() => setShowModal(true)}
                className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md btn-hover-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode className="h-6 mr-[5px]" /> Read More
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 modal-backdrop p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 w-full max-w-5xl mx-auto rounded-3xl shadow-2xl relative overflow-hidden border-4 border-purple-400 max-h-[90vh] flex flex-col"
              initial={{ 
                scale: 0.5, 
                opacity: 0,
                y: 100,
                rotateX: 90
              }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20,
                  duration: 0.6
                }
              }}
              exit={{ 
                scale: 0.5, 
                opacity: 0,
                y: 100,
                rotateX: 90,
                transition: { duration: 0.3 }
              }}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white p-6 relative flex-shrink-0">
  <motion.button
    className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200 font-bold bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50 border-2 border-white transition-all duration-300 hover:bg-opacity-50"
    onClick={handleModalClose}
    whileHover={{ scale: 1.1, rotate: 90 }}
    whileTap={{ scale: 0.9 }}
    aria-label="Close"
    title="Close"
  >
    <FaTimes />
  </motion.button>

  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="text-center"
  >
    <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-lg text-purple-100">
      Project Details & Technical Overview
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      <div className="flex items-center text-purple-200 bg-purple-800 bg-opacity-30 px-3 py-1 rounded-full">
        <FaLaptopCode className="mr-2" />
        <span>Frontend</span>
      </div>
      <div className="flex items-center text-purple-200 bg-purple-800 bg-opacity-30 px-3 py-1 rounded-full">
        <FaServer className="mr-2" />
        <span>Backend</span>
      </div>
      <div className="flex items-center text-purple-200 bg-purple-800 bg-opacity-30 px-3 py-1 rounded-full">
        <FaDatabase className="mr-2" />
        <span>Database..</span>
      </div>
    </div>
  </motion.div>
</div>

{/* Modal Content */}
<div className="p-8 overflow-y-auto modal-content flex-1">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="project-details whitespace-pre-line"
    // Use whitespace-pre-line to preserve line breaks and spacing
    dangerouslySetInnerHTML={{ __html: formatDetails(details).replace(/\n/g, "<br/>") }}
  />
</div>

              {/* Modal Footer */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 border-t-2 border-purple-200 flex-shrink-0">
                <div className="flex justify-center space-x-4">
                  {github && (
                    <motion.a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition text-white font-semibold shadow-lg btn-hover-effect"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="h-5 mr-2" /> View on GitHub
                    </motion.a>
                  )}
                  {demo && (
                    <motion.a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-lg btn-hover-effect"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="h-5 mr-2" /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
