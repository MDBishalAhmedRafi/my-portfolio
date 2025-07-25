import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaBolt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative z-10 bg-gradient-to-br from-teal-800 via-slate-900 to-gray-900 py-16 px-6 md:px-10 rounded-2xl overflow-hidden text-white"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute -top-20 -left-32 w-[400px] h-[400px] opacity-20 rounded-full blur-3xl "
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 backdrop-blur-md bg-white/10 rounded-3xl shadow-xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-6 mx-auto rounded-full"></div>

        {/* Paragraphs */}
        <p className="text-emerald-300 leading-relaxed mb-4 text-center">
          Hello! I’m <strong className="text-emerald-100">MD Bishal Ahmed Rafi</strong>, a passionate <span className="font-semibold text-teal-400">Junior Full Stack Developer</span> who loves crafting powerful and clean web applications using modern tools and technologies.
        </p>

        <p className="text-emerald-300 mb-4 text-center">
          My journey began with curiosity about how the web works. Since then, I’ve fallen in love with the process of building, learning, and improving. I specialize in JavaScript, React, Node.js, MongoDB — building full-stack solutions with performance in mind.
        </p>

        <p className="text-emerald-300 text-center">
          Outside of code, I enjoy designing interfaces, reading dev blogs, and sometimes hitting the cricket ground. I'm a strong believer in growth, community, and sharing knowledge.
        </p>

        {/* Personality Badges */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <span className="flex items-center gap-2 bg-teal-900 bg-opacity-30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaLightbulb /> Creative Thinker
          </span>
          <span className="flex items-center gap-2 bg-emerald-900 bg-opacity-30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaLaptopCode /> Full Stack Dev
          </span>
          <span className="flex items-center gap-2 bg-cyan-900 bg-opacity-30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <FaBolt /> Fast Learner
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
