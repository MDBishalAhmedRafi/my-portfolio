import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import image from '../assets/image-2.png'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 rounded-2xl min-h-[auto] lg:overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between 
                 bg-gradient-to-br from-teal-800 via-slate-900 to-gray-900 px-6 md:px-10 py-16 text-white overflow-hidden"
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

      {/* Left Side */}
      <motion.div
        className="relative z-10 md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-widest text-emerald-300 uppercase">
          Welcome to my world
        </p>

        <h1 className="text-5xl font-bold text-white leading-tight">
          Hi, I’m{" "}
          <span className="text-emerald-400">MD Bishal Ahmed Rafi</span> <br />
          <span className="text-emerald-400">a</span>{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={["Web Developer.", "React Enthusiast."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-emerald-300 max-w-xl">
          This is MD Bishal Ahmed Rafi, a passionate and self-motivated Junior Full Stack Developer from Bangladesh. I love building real-world applications and continuously learning new technologies. Clean code, good UI/UX, and efficient backend — these are what I care about most.
        </p>

        {/* Social Icons and Resume Button */}
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center gap-10 mt-8">
          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-300 mb-2">
              FIND WITH ME
            </p>
            <div className="flex gap-6 text-white">
              <a
                href="https://www.facebook.com/profile.php?id=100078144576684"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-emerald-400/30 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGF50xI1sqKmQAAAZe_T6uYfxR-AtDVfFZKew_BymgPXfmax61-VbkM5hVBRAtFtQucoIWkauXoSjUU_K-A28swoxifAH9M20jgECDw32rEP8Ny_eL37kshgoOduyr8-wfrTnY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyourlinkedin"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-emerald-400/30 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com/MDBishalAhmedRafi"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-emerald-400/30 transition"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={() =>
                window.open(
                  'https://drive.google.com/uc?export=download&id=11wbd5vpcW3Fz2WUfAobBv1C1QiVN_qwr',
                  'target_blank'
                )
              }
              className="btn btn-outline shadow-md hover:shadow-lg text-emerald-300 border-emerald-300 hover:bg-emerald-700 hover:text-white transition"
            >
              My Resume
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="relative z-10 md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt="Profile of MD Bishal Ahmed Rafi"
          className="rounded-2xl shadow-xl w-[350px] h-[500px] md:w-[400px]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
