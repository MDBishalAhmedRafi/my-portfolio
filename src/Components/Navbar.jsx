import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png'
const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Close menu if screen resizes above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll spy logic
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-indigo-300 transition"
        >
          <img src={logo} className="h-[40px]" alt="" />
        </a>

        <ul className="hidden md:flex space-x-8 text-indigo-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition ${
                  activeSection === link.name
                    ? "text-white font-semibold border-b-2 border-white pb-1"
                    : "hover:text-white"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded p-2 text-indigo-200"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 border-t border-indigo-700 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-6 py-4 font-medium text-indigo-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block transition ${
                  activeSection === link.name
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
