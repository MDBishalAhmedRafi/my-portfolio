import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Biology",
    year: "Running (2nd Year)",
    board: "Board: Dhaka",
    institution: "Govt Tolaram College",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    year: "2021",
    board: "Board: Dhaka",
    institution: "Sabujbagh Govt. College",
    gpa: "GPA: 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    year: "2019",
    board: "Board: Dhaka",
    institution: "Shantibagh High School",
    gpa: "GPA: 5.00",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="rounded-2xl relative z-10 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 py-16 px-6 md:px-10 text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-2"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          🎓 My Education Journey
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mx-auto my-4 rounded-full" />

        <motion.p
          className="text-center text-indigo-200 max-w-xl mx-auto mt-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Education is the foundation of my journey into development. Here’s a quick overview of my academic milestones.
        </motion.p>

        {/* Timeline */}
        <div className="mt-10 space-y-10 relative border-l-4 border-indigo-400 pl-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 relative hover:scale-[1.015] transition duration-300 hover:shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Icon */}
              <div className="absolute -left-7 top-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <FaGraduationCap size={18} />
              </div>

              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm text-indigo-200 mb-2 font-medium">{item.year}</p>

              <p className="text-indigo-100 leading-relaxed">
                <span className="font-semibold text-white">{item.institution}</span>
                <br />
                {item.board}
                <br />
                {item.gpa && <span>{item.gpa}</span>}
              </p>

              {item.current && (
                <span className="inline-block mt-3 text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-800 rounded-full animate-pulse">
                  🎯 Currently Studying
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
