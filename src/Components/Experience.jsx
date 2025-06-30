import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
  id="experience"
  className="rounded-2xl relative bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 py-16 px-6 md:px-10 overflow-hidden z-10 text-white"
>
  {/* Background Blobs */}
  <motion.div
    className="absolute -top-28 -left-20 w-[300px] h-[300px] bg-indigo-400 rounded-full opacity-20 blur-3xl"
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-32 -right-24 w-[280px] h-[280px] bg-purple-400 rounded-full opacity-20 blur-3xl"
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  />

  <div className="relative z-10">
    {/* Heading */}
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-2"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      💼 Work Experience
    </motion.h2>

    <motion.div
      className="w-24 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mx-auto my-4 rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    />

    <motion.p
      className="text-center text-indigo-200 mb-12 max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      A glimpse into my ongoing role in the tech industry where I contribute to real projects and global collaboration.
    </motion.p>

    {/* Experience Card */}
    <motion.div
      className="relative bg-white/10 backdrop-blur-xl shadow-xl rounded-xl p-6 border-l-4 border-indigo-400 hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Timeline Icon */}
      <div className="absolute -left-7 top-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
        <FaBriefcase size={18} />
      </div>

      {/* Experience Details */}
      <h3 className="text-xl font-bold text-white">
        Assistant Project Co-Ordinator
      </h3>
      <p className="text-sm text-indigo-200 mb-2 font-medium">
        Since February 1, 2024 — Present
      </p>

      <p className="text-indigo-100 leading-relaxed">
        I’m currently working at{" "}
        <span className="font-semibold text-white">DigitechPro Ltd.</span>, a
        sister concern of{" "}
        <span className="font-semibold text-blue-300">CreateAbit</span>, a
        renowned American IT company. My responsibilities include coordinating
        development teams, managing project lifecycles, maintaining client
        communication, and ensuring on-time delivery.
      </p>

      <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-800 rounded-full animate-pulse">
        🚀 Currently Working at DigitechPro Ltd.
      </span>
    </motion.div>
  </div>
</section>

  );
};

export default Experience;
