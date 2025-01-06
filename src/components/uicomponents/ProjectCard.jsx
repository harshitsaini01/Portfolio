import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

const ProjectCard = ({ image, title, description }) => {

 
  return (
    <div className="card bg-gradient-to-b from-purple-900 via-indigo-800 to-purple-700 text-white w-full max-w-sm h-[480px] shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mx-auto relative">
      <div className="flex justify-center p-4">
        <img
          src={image}
          alt={title}
          className="w-[320px] h-[200px] object-contain"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-center">{title}</h2>
          <p className="text-sm text-gray-300 mt-3">{description}</p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-3">
          <button className=" flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md">
          <FaGithub  className="h-6 mr-[5px]"  /> GitHub
          </button>
          <button className="flex justify-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold shadow-md">
          <TiDocumentText className="h-6 mr-[5px]"  /> Demo
          </button>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
