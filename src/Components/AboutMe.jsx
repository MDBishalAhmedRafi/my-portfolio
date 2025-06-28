import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaBolt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-purple-50 via-white to-blue-50 py-10 px-6 md:px-10 rounded-2xl"
    >
      <motion.div
        className="backdrop-blur-md bg-white/60 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 mx-auto rounded-full"></div>

        {/* Paragraphs */}
        <p className="text-gray-800 leading-relaxed mb-4 text-center">
          Hello! I’m <strong className="text-indigo-700">MD Bishal Ahmed Rafi</strong>,
          a passionate <span className="font-semibold text-blue-600">MERN Stack Developer</span>
          who loves crafting powerful and clean web applications using modern tools and technologies.
        </p>

        <p className="text-gray-700 mb-4 text-center">
          My journey began with curiosity about how the web works. Since then, I’ve fallen in love with the process
          of building, learning, and improving. I specialize in JavaScript, React, Node.js, MongoDB — building full-stack solutions with performance in mind.
        </p>

        <p className="text-gray-700 text-center">
          Outside of code, I enjoy designing interfaces, reading dev blogs, and sometimes hitting the cricket ground.
          I'm a strong believer in growth, community, and sharing knowledge.
        </p>

        {/* Personality Badges */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaLightbulb /> Creative Thinker
          </span>
          <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaLaptopCode /> Full Stack Dev
          </span>
          <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaBolt /> Fast Learner
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
