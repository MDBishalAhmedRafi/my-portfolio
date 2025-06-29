import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import image from '../assets/my_image.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 rounded-2xl min-h-[auto] lg:h-screen lg:overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between 
                 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 px-6 md:px-10 py-16 text-white overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-28 w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"
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
        <p className="text-sm tracking-widest text-indigo-300 uppercase">
          Welcome to my world
        </p>

        <h1 className="text-5xl font-bold text-white leading-tight">
          Hi, I’m{" "}
          <span className="text-indigo-300">MD Bishal Ahmed Rafi</span> <br />
          <span className="text-indigo-300">a</span>{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Full Stack MERN Developer.", "Web Developer.", "React Enthusiast."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-indigo-300 max-w-xl">
          I use animation as a third dimension to simplify experiences and
          guide through each interaction. I don’t add motion just to spruce
          things up, but to enhance user understanding.
        </p>

        {/* Social Icons and Resume Button */}
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center gap-10 mt-8">
          <div>
            <p className="text-sm font-semibold tracking-widest text-indigo-300 mb-2">
              FIND WITH ME
            </p>
            <div className="flex gap-6 text-white">
                      <a
                        href="https://facebook.com/yourfacebook"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                        aria-label="Facebook"
                      >
                        <FaFacebookF size={18} />
                      </a>
                      <a
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                      <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                        aria-label="GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
          </div>

          <div>
           <a href='https://docs.google.com/forms/d/e/1FAIpQLSdAEt-8PKW9y0AI_yk9IsIXKhS9I3fqDHwCYBDtSpJQMmgosA/viewform' target='_blank' rel="noreferrer">
             <button className='btn btn-outline shadow-md hover:shadow-lg text-indigo-300 border-indigo-300 hover:bg-indigo-700 hover:text-white transition'>
              My Resume
             </button>
           </a>
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
          className="rounded-2xl shadow-xl w-[350px] md:w-[400px]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
