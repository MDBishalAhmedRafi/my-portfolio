import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="rounded-2xl relative bg-gradient-to-br from-teal-800 via-slate-900 to-gray-900 py-16 px-6 md:px-10 overflow-hidden z-10 text-white"
    >
      {/* Background Blobs */}
      <div
        className="absolute -top-28 -left-20 w-[300px] h-[300px] bg-emerald-400 rounded-full opacity-20 blur-3xl animate-pulse"
        data-aos="fade-down"
      />
      <div
        className="absolute -bottom-32 -right-24 w-[280px] h-[280px] bg-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"
        data-aos="fade-up"
      />

      <div className="relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl font-extrabold text-center text-white mb-2"
          data-aos="fade-up"
        >
          💼 Work Experience
        </h2>

        <div
          className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto my-4 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        <p
          className="text-center text-emerald-300 mb-12 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A glimpse into my ongoing role in the tech industry where I contribute to real projects and global collaboration.
        </p>

        {/* Experience Card */}
        <div
          className="relative bg-white/10 backdrop-blur-xl shadow-xl rounded-xl p-6 border-l-4 border-emerald-400 hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl"
          data-aos="fade-left"
        >
          {/* Timeline Icon */}
          <div className="absolute -left-7 top-6 bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
            <FaBriefcase size={18} />
          </div>

          {/* Experience Details */}
          <h3 className="text-xl font-bold text-white">
            Assistant Project Co-Ordinator
          </h3>
          <p className="text-sm text-emerald-200 mb-2 font-medium">
            Since February 1, 2024 — Present
          </p>

          <p className="text-emerald-100 leading-relaxed">
            I’m currently working at{" "}
            <span className="font-semibold text-white">DigitechPro Ltd.</span>, a
            sister concern of{" "}
            <span className="font-semibold text-teal-400">CreateAbit</span>, a
            renowned American IT company. My responsibilities include coordinating
            development teams, managing project lifecycles, maintaining client
            communication, and ensuring on-time delivery.
          </p>

          <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full animate-pulse">
            🚀 Currently Working at DigitechPro Ltd.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
