
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../home image.png";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[60vh] md:min-h-[70vh] px-4 py-10 md:py-20 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden aspect-[16/9]"
    >
      {/* Dots/geometric pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-60" />
        <div className="absolute top-24 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50" />
        <div className="absolute bottom-16 right-20 w-3 h-3 bg-blue-200 rounded-full opacity-40" />
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-purple-200 rounded-full opacity-40" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-40" />
      </div>
      {/* Left: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center z-10 mb-8 md:mb-0"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 md:-inset-6 rounded-2xl bg-blue-400 opacity-60 blur-2xl z-0" />
          <img
            src={heroImg}
            alt="Professional young person using laptop"
            className="relative max-w-xs md:max-w-md rounded-xl shadow-xl object-cover z-10"
            style={{ background: "rgba(255,255,255,0.7)" }}
          />
        </div>
      </motion.div>
      {/* Right: Text */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start z-10"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center md:text-left leading-tight drop-shadow-lg">
          Empowering Students with Real Projects and Real Experience
        </h1>
        <p className="text-base md:text-xl text-blue-700 mb-8 max-w-xl text-center md:text-left">
          Get hands-on training, mentorship, and internship certification by working on live projects with industry experts.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/oceanex14"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-blue-700 text-white font-semibold text-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            Apply Now
          </a>
          <a
            href="#programs"
            className="px-7 py-3 rounded-full border-2 border-blue-700 text-blue-700 font-semibold text-lg bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
