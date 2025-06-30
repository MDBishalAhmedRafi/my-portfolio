import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800  text-white py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name and Tagline */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            MD Bishal Ahmed Rafi
          </h2>
          <p className="text-sm text-indigo-200">
            Junior Full Stack Developer • React Enthusiast
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white">
          <a
            href="https://www.facebook.com/profile.php?id=100078144576684"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGF50xI1sqKmQAAAZe_T6uYfxR-AtDVfFZKew_BymgPXfmax61-VbkM5hVBRAtFtQucoIWkauXoSjUU_K-A28swoxifAH9M20jgECDw32rEP8Ny_eL37kshgoOduyr8-wfrTnY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/MDBishalAhmedRafi"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
        &copy; {currentYear} MD Bishal Ahmed Rafi. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
