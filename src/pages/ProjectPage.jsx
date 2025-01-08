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
      title: "Incetum",
      description:
        "Personal Chat Room or Workspace to share resources and hang out with friends. Built with React.js, Material-UI, and Firebase.",
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
      <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-100 py-12">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
          Welcome to <span className="text-purple-400">My Projects</span>
        </h1>
        <h3 className="text-center text-xl sm:text-4xl lg:text-xl font-extrabold leading-tight mb-12 ">
          Here are a few project i've worked on recently
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12">
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
      <div className="mx-[150px] my-10 ">
        <HireME />
      </div>
    </div>
  );
}
