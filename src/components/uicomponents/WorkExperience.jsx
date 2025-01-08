import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const experiences = [
    {
      duration: "April 2024 - Present",
      title: "Full Stack Developer",
      company: "Haxways",
      work: "Developed and enhanced frontend and backend using React and the MERN stack, ensuring responsiveness and cross-browser compatibility. Collaborated with designers to create user-friendly interfaces and optimized performance.",
      tools: "React, MERN Stack, Git, GitHub, Tailwind CSS, Node.js, Express.js, MongoDB"
    },
    {
      duration: "Oct 2023 - April 2024",
      title: "Test Engineer",
      company: "GlobalStep",
      work: "Increased testing efficiency by 30% through script management. Deployed builds after QA cycles, wrote test cases, and maintained 98% bug identification accuracy on 'Marvel Strike Force.' Collaborated with US clients and used tools like JIRA and Confluence to track over 100+ bug fixes.",
      tools: "JIRA, Confluence, Debug Consoles, Performance Tools, Bug Tracking Software, Scripts"
    } 
];

const Experience = () => {
  const [inView, setInView] = useState(false);
  const experienceRef = useRef(null);

  const handleScroll = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-white px-6">
      <h1 className="text-white text-center text-[30px] sm:text-[40px] md:text-[45px] font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
        Work <span className="text-purple-500">Experience</span>
      </h1>
      <div
        ref={experienceRef}
        className={`experience-section ${
          inView ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card bg-gradient-to-br from-[#2b2b2b] via-[#484848] to-[#614aba] mb-8 border border-[#333] rounded-xl shadow-xl p-6 transform transition-all duration-300 ease-in-out
              ${inView ? `animate__animated animate__fadeInUp animate__delay-${0.3 * index}s` : ""} hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:translateY-[-10px]`}
            style={{
              animation: inView
                ? `slideFromLeftRight 0.8s ease-out ${0.2 * index}s forwards`
                : "",
            }}
          >
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 hover:text-purple-500 transition-colors duration-300">
              {exp.title}{" "}
              <span className="text-gray-300 text-lg">- {exp.company}</span>
            </h3>
            <p className="mt-2 text-lg sm:text-xl text-gray-300">
              <span className="font-semibold text-white">Work:</span> {exp.work}
            </p>
            <p className="mt-2 text-lg sm:text-xl text-gray-300">
              <span className="font-semibold text-white">Tools Used:</span>{" "}
              {exp.tools}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
