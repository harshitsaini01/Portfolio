import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProjectCard = ({
  images = [],
  title = "Default Title",
  description = "No description available",
}) => {
  if (!Array.isArray(images)) {
    console.error("The `images` prop must be an array. Received:", images);
    return null; // Prevent the component from rendering
  }

  // Add the first image to the end of the array for seamless looping
  const imagesWithLoop = [...images, images[0]];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        handleNextImage();
      }, 3000); // Wait for 3 seconds before transitioning to the next image

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, images]);

  const handleNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentImageIndex === images.length - 1) {
        // Skip the transition to create seamless effect
        setIsTransitioning(false);
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 1500); // Match with transition duration
  };

  return (
    <div className="card bg-gradient-to-b from-purple-900 via-indigo-800 to-purple-700 text-white w-full max-w-sm h-[480px] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto relative">
      <div className="relative w-[320px] h-[200px] overflow-hidden mx-auto mt-4">
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
              className="w-full h-full object-cover flex-shrink-0"
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
          <p className="text-sm text-gray-300 mt-3">{description}</p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-3">
          <button className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md">
            <FaGithub className="h-6 mr-[5px]" /> GitHub
          </button>
          <Link
          to="https://incentum.ai/">
          <button className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md">
            <TiDocumentText className="h-6 mr-[5px]" /> Demo
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
