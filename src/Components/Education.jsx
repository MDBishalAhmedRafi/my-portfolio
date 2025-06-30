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
      {/* Background Gradient Blobs */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-2">
          🎓 My Education Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mx-auto my-4 rounded-full" />

        <p className="text-center text-indigo-200 max-w-xl mx-auto mt-2 mb-10">
          Education is the foundation of my journey into development. Here’s a quick overview of my academic milestones.
        </p>

        {/* Timeline */}
        <div className="mt-10 space-y-10 relative border-l-4 border-indigo-400 pl-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 relative hover:scale-[1.01] transition duration-300 hover:shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot Icon */}
              <div className="absolute -left-7 top-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <FaGraduationCap size={18} />
              </div>

              {/* Details */}
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm text-indigo-200 mb-2 font-medium">
                {item.year}
              </p>

              <p className="text-indigo-100">
                <span className="font-semibold text-white">{item.institution}</span>
                <br />
                {item.board}
                <br />
                {item.gpa && <span>{item.gpa}</span>}
              </p>

              {/* Highlight Badge */}
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
