import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    color: "from-teal-700 to-cyan-700",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    category: "Backend",
    color: "from-teal-700 to-cyan-700",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Database", icon: <FaDatabase className="text-cyan-400" /> },
    ],
  },
  {
    category: "Tools",
    color: "from-teal-700 to-cyan-700",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 bg-gradient-to-br from-teal-800 via-slate-900 to-gray-900 py-16 px-6 md:px-10 rounded-2xl overflow-hidden text-white"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute -top-20 -left-32 w-[400px] h-[400px] opacity-20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold">My Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        <p className="text-emerald-300 mt-4">
          Here are the technologies and tools I use to build modern web applications.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-white/20 rounded-xl p-4 shadow-md hover:shadow-xl transition"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
