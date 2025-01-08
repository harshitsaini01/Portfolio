import React from "react";
import ProjectCard from "../components/uicomponents/ProjectCard";
import HireME from "../components/uicomponents/HireMe";

export default function ProjectPage() {
  const projects = [
    {
      images: [
        "public/incentum/signup.jpg",
        "public/incentum/home.jpg",
        "public/incentum/loan.jpg",
        "public/incentum/form.jpg",
      ],
      title: "Incentum.loans",
      description:
        "Developed a live responsive loan application website incentum.loans that enables users to apply for loans, upload required documents, and receive quick loan approvals with an intuitive and user-friendly interface, technologies used React.js, Tailwind CSS, JavaScript, Node.js, Express, MongoDB",
    },
    {
      images: [
        "public/about.png",
        "public/image.png",
        "public/about.png",
      ],
      title: "Bits-of-Code",
      description:
        "My personal blog built with Next.js and Tailwind CSS, which takes content from markdown files and renders it dynamically.",
    },
    {
      images: [
        "public/about.png",
        "public/image.png",
        "public/about.png",
      ],
      title: "Editor.io",
      description:
        "Online code editor supporting HTML, CSS, and JavaScript. Includes a markdown editor and live preview support.",
    },
  ];

  return (
    <div>
      {/* Projects Section */}
      <div className="min-h-screen  text-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-500">
            Welcome to <span className="text-purple-400">My Projects</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="mx-6 sm:mx-16 lg:mx-[150px] my-10">
        <HireME />
      </div>
    </div>
  );
}
