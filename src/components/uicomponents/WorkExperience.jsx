import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    duration: "April 2024 - Present",
    title: "Full Stack Developer",
    company: "Haxways",
    work: "Developed and enhanced frontend and backend using React and the MERN stack, ensuring responsiveness and cross-browser compatibility. Collaborated with designers to create user-friendly interfaces and optimized performance.",
    tools: "React, MERN Stack, Git, GitHub, Tailwind CSS, Node.js, Express.js, MongoDB",
  },
  {
    duration: "Oct 2023 - April 2024",
    title: "Test Engineer",
    company: "GlobalStep",
    work: "Increased testing efficiency by 30% through script management. Deployed builds after QA cycles, wrote test cases, and maintained 98% bug identification accuracy on 'Marvel Strike Force.' Collaborated with US clients and used tools like JIRA and Confluence to track over 100+ bug fixes.",
    tools: "JIRA, Confluence, Debug Consoles, Performance Tools, Bug Tracking Software, Scripts",
  },
];

const Experience = () => {
  return (
    <section id="experience" className=" px-6 ">
      <h3 className="text-6xl font-bold text-center mb-10 text-purple-500">
        Work Experience
      </h3>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <h4 className="text-xl font-bold text-white">
              {exp.title}{" "}
              <span className="text-purple-400">- {exp.company}</span>
            </h4>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <span className="font-semibold text-purple-400">Work:</span>{" "}
              {exp.work}
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <span className="font-semibold text-purple-400">Tools Used:</span>{" "}
              {exp.tools}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
