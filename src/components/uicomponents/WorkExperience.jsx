import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const experiences = [
  {
    duration: "July 2022 - Present",
    title: "GRAPHIC DESIGNER",
    company: "APPINVENTIV TECHNOLOGIES PVT. LTD.",
    work: "Blogs, Social Media, Newsletter & so on.",
    tools: "Adobe Photoshop, Adobe Illustrator, Adobe XD",
  },
  {
    duration: "Feb 2022 - Jul 2022",
    title: "Associate Graphic Designer",
    company: "PREPLADDER (UNACADEMY)",
    work:
      "Books, Social Media, Newsletter, YouTube Thumbnails, E-books, Handbook, Class Scheduling (youtube), KeyNotes etc.",
    tools:
      "Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe InDesign, Canva, YouTube Studio",
  },
  {
    duration: "Nov 2021 - Jan 2022",
    title: "Associate Graphic Designer",
    company: "INCOUNSE",
    work:
      "Books, Social Media, Newsletter, YouTube Thumbnails, E-books, Handbook, Class Scheduling (youtube), KeyNotes etc.",
    tools:
      "Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe InDesign, Canva, YouTube Studio",
  },
  {
    duration: "Aug 2021 - Sep 2021",
    title: "GRAPHIC DESIGNER",
    company: "CANTILEVER LABS (FREELANCE)",
    work: "Social Media, Email Designing",
    tools: "Adobe Photoshop, Adobe Illustrator, Sendinblue, Zoho",
  },
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
    <div className="text-white px-6 md:px-20 py-16">
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
