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
    color: "from-blue-100 to-blue-50",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
    ],
  },
  {
    category: "Backend",
    color: "from-indigo-100 to-indigo-50",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Database", icon: <FaDatabase className="text-purple-700" /> },
    ],
  },
  {
    category: "Tools",
    color: "from-purple-100 to-purple-50",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-white to-purple-50 py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-2 rounded-full" />
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Here are the technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg backdrop-blur-md`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-700">{skill.name}</p>
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
