import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaFire,
  FaJs,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

const techIcons = {
  React: <FaReact className="text-sky-400" size={18} />,
  "Node.js": <FaNodeJs className="text-green-500" size={18} />,
  MongoDB: <FaDatabase className="text-green-500" size={18} />,
  "Tailwind CSS": <FaCss3Alt className="text-cyan-400" size={18} />,
  JWT: <FaJs className="text-yellow-400" size={18} />,
  Firebase: <FaFire className="text-yellow-400" size={18} />,
  "Express.js": <FaLaptopCode className="text-gray-300" size={18} />,
  "Framer Motion": <FaReact className="text-purple-500" size={18} />,
};

const projects = [
  {
    name: "Food Sharing Web App",
    images: ["/project1-1.jpg"],
    liveLink: "https://your-live-link1.com",
    githubLink: "https://github.com/yourname/project1",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    description:
      "A platform where users can donate extra food, and needy users can request or claim donations.",
    challenges: "Handling secure food requests & ensuring role-based routing.",
    futurePlans: "Add real-time chat and Firebase push notifications.",
    animation: "fade",
  },
  {
    name: "Recipe Book",
    images: ["/project2-1.jpg"],
    liveLink: "https://your-live-link2.com",
    githubLink: "https://github.com/yourname/project2",
    stack: ["React", "Express.js", "MongoDB", "Framer Motion"],
    description:
      "A recipe management app allowing users to add, edit, like, and share recipes.",
    challenges: "Syncing likes in frontend & backend, and modal management.",
    futurePlans: "Add voice search and recipe export to PDF.",
    animation: "slide",
  },
  {
    name: "Job Portal App",
    images: ["/project3-1.jpg"],
    liveLink: "https://your-live-link3.com",
    githubLink: "https://github.com/yourname/project3",
    stack: ["React", "Firebase", "Tailwind CSS"],
    description:
      "A simple job listing site with authentication and filtering by category.",
    challenges: "Protected routes and Firebase auth integration.",
    futurePlans: "Implement company dashboard and resume upload system.",
    animation: "zoom",
  },
];

const animationWrapper = (type, children) => {
  switch (type) {
    case "fade":
      return <Fade>{children}</Fade>;
    case "slide":
      return <Slide>{children}</Slide>;
    case "zoom":
      return <Zoom>{children}</Zoom>;
    default:
      return children;
  }
};

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 py-16 px-4 sm:px-6 md:px-10 text-white z-10"
    >

      <div className="relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mx-auto my-4 rounded-full" />

        <p className="text-center text-indigo-200 max-w-2xl mx-auto mb-12 text-sm sm:text-base px-2">
          Here are some of the major projects I’ve built recently using modern web technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) =>
            animationWrapper(
              project.animation,
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300 hover:shadow-2xl flex flex-col justify-between h-full"
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-indigo-200 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/20 text-indigo-100 rounded-full flex items-center gap-1"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-red-300 font-semibold mb-2">
                  ⚠️ <strong>Challenges:</strong> {project.challenges}
                </p>
                <p className="text-sm text-purple-200 mb-4">
                  <strong>Future Plans:</strong> {project.futurePlans}
                </p>
                <div className="mt-auto pt-4 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold px-4 py-2 bg-sky-500 text-white rounded-full shadow-md hover:bg-sky-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold px-4 py-2 border border-indigo-300 text-indigo-100 rounded-full hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
