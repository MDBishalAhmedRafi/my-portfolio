import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-900 via-slate-900 to-gray-900 shadow-lg z-50 backdrop-blur-md">
      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-cyan-400 transition"
        >
          <p className="h-[40px] text-cyan-400">MD B A Rafi</p>
        </a>
        <ul className="hidden md:flex space-x-8 text-emerald-400 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition ${
                  activeSection === link.name
                    ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
                    : "hover:text-cyan-400"
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
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded p-2 text-emerald-400"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out bg-gradient-to-r from-teal-900 via-slate-900 to-gray-900 border-t border-slate-700 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-6 py-4 font-medium text-emerald-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block transition ${
                  activeSection === link.name
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-cyan-400"
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
