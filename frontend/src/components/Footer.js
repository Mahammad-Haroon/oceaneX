import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 mt-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/ocean.__.x?igsh=MWJuYmR0YjBrcXh0OA==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 text-xl"><FaInstagram /></a>
        <a href="mailto:oceanex2024@gmail.com" className="hover:text-blue-300 text-xl"><FaEnvelope /></a>
      </div>
      <div className="text-sm">oceanex2024@gmail.com</div>
  <div className="text-xs">&copy; {new Date().getFullYear()} OceaneX Technologies. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
