import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Harshit Saini
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          A Passionate Software Developer
        </motion.h2>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Crafting exceptional web experiences through modern technologies and design.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-8 px-6 py-3 bg-purple-700 text-white rounded-lg text-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-10 text-purple-500">
          Technologies I Work With
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["JavaScript", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Git", "Docker"].map((tech, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-lg font-bold">{tech}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-purple-500">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">Project {project}</h4>
              <p className="mt-2 text-gray-400">
                A brief description of the project goes here.
              </p>
              <Link
                to={`/project-${project}`}
                className="block mt-4 text-purple-500 hover:text-purple-400"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-10 text-purple-500">
          Get In Touch
        </h3>

        <div className="flex justify-center">
          <motion.a
            href="mailto:example@email.com"
            className="px-6 py-3 bg-purple-700 text-white rounded-lg text-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
