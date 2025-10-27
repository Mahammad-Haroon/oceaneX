import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-blue-700 tracking-wide"
        >
          OceaneX Technologies
        </motion.div>
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              className="transition-colors duration-200 cursor-pointer hover:text-blue-600"
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>
        {/* Mobile menu button (optional for later) */}
      </nav>
    </header>
  );
};

export default Navbar;
