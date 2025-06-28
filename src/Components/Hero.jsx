import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiInvision, SiSketch, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";
import image from '../assets/my_image.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
                return (
                                <section
  id="home"
  className="rounded-2xl min-h-[auto] lg:h-screen lg:overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between bg-purple-100 px-6 md:px-10 py-10 md:py-20"
>
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-widest text-indigo-600 uppercase">
          Welcome to my world
        </p>

        <h1 className="text-5xl font-bold text-blue-600 leading-tight">
          Hi, I’m{" "}
          <span className="text-indigo-600">MD Bishal Ahmed Rafi</span> <br />
          <span className="text-indigo-600">a</span>{" "}
          <span className="text-blue-700">
            {/* Typewriter effect here */}
            <Typewriter
              words={["Full Stack MERN Developer.", "Web Developer.", "React Enthusiast."]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-indigo-700 max-w-xl">
          I use animation as a third dimension to simplify experiences and
          guide through each interaction. I don’t add motion just to spruce
          things up, but to enhance user understanding.
        </p>

        {/* Social Icons and Skills */}
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center gap-10 mt-8">
          <div>
            <p className="text-sm font-semibold tracking-widest text-indigo-600 mb-2">
              FIND WITH ME
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/yourfacebook"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-blue-600" size={20} />
              </a>
              <a
                href="https://instagram.com/yourinstagram"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-blue-600" size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-blue-600" size={20} />
              </a>
            </div>
          </div>

          <div>
           <a href='https://docs.google.com/forms/d/e/1FAIpQLSdAEt-8PKW9y0AI_yk9IsIXKhS9I3fqDHwCYBDtSpJQMmgosA/viewform' target='_blank'>
                 <button className='btn btn-outline shadow-md hover:shadow-lg text-indigo-700 hover:bg-indigo-700 hover:text-white'>
                My Resume
            </button>
           </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image} // Replace with your actual profile image path
          alt="Profile of MD Bishal Ahmed Rafi"
          className="rounded-2xl shadow-xl w-[350px] md:w-[400px]"
        />
      </motion.div>
    </section>
                );
};

export default Hero;