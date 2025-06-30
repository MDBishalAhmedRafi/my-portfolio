import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cutb9xd",
        "template_a0ctr1n",
        form.current,
        "qJqHgqiE4ylwG-OXi"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
  <section
    id="contact"
    className="rounded-2xl py-20 px-6 sm:px-10 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 text-white"
  >
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
        Let's Talk 💬
      </h2>
      <p className="text-indigo-200 mb-12 text-sm sm:text-base">
        Have a question, a project idea, or just want to say hi? Drop a message!
      </p>

      <motion.div
        className="grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Contact Info */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-xl" />
            <span className="text-white text-sm sm:text-base">
              mdbishalahmedrafi55@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-400 text-xl" />
            <span className="text-white text-sm sm:text-base">
              +880 1518371336
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <span className="text-white text-sm sm:text-base">
              Dhaka, Bangladesh
            </span>
          </div>
          <p className="text-indigo-100 text-sm sm:text-base">
            I typically respond within 24 hours. Send your message and I’ll get back to you quickly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="bg-white/80 text-indigo-900 w-full px-4 py-3 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="bg-white/80 text-indigo-900 w-full px-4 py-3 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="bg-white/80 text-indigo-900 w-full px-4 py-3 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition"
          >
            <FaPaperPlane /> Send Message
          </motion.button>

          {sent && (
            <motion.p
              className="text-green-300 font-medium text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </motion.div>
  </section>
);

};

export default Contact;
