import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section
      id="education"
      className="rounded-2xl relative z-10 bg-gradient-to-br from-teal-800 via-slate-900 to-gray-900 py-16 px-6 md:px-10 text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-32 w-[400px] h-[400px] opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-4xl font-extrabold text-center mb-2"
        >
          🎓 My Education Journey
        </h2>
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto my-4 rounded-full"
        />

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-emerald-300 max-w-xl mx-auto mt-2 mb-10"
        >
          Education is the foundation of my journey into development. Here’s a quick overview of my academic milestones.
        </p>

        {/* Timeline */}
        <div className="mt-10 space-y-10 relative border-l-4 border-emerald-400 pl-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 relative hover:scale-[1.015] transition duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Timeline Icon */}
              <div className="absolute -left-7 top-6 bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <FaGraduationCap size={18} />
              </div>

              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm text-emerald-200 mb-2 font-medium">{item.year}</p>

              <p className="text-emerald-100 leading-relaxed">
                <span className="font-semibold text-white">{item.institution}</span>
                <br />
                {item.board}
                <br />
                {item.gpa && <span>{item.gpa}</span>}
              </p>

              {item.current && (
                <span className="inline-block mt-3 text-xs font-semibold px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full animate-pulse">
                  🎯 Currently Studying
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
