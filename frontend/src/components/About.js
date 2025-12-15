import React from "react";
import { motion } from "framer-motion";
import about1 from '../about1.jpg';
import about2 from '../about2.jpg';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-200 opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-purple-200 opacity-30 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-1/5 h-1/5 bg-blue-400 opacity-20 rounded-full blur-2xl" />
        </div>
        {/* Main content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-8 gap-8">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center mb-6 md:mb-0"
          >
            <div className="bg-white/80 rounded-3xl shadow-xl p-4 md:p-8 flex flex-col items-center gap-4 border border-blue-100 relative w-full max-w-xs md:max-w-md">
              {/* Group illustration */}
              <div className="relative flex flex-row justify-center items-end gap-4 w-full">
                {/* Larger, darker blue shadow behind images */}
                <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-28 md:w-60 md:h-40 bg-blue-950 opacity-80 rounded-3xl blur-3xl" />
                <img
                  src={about1}
                  alt="Diverse group collaborating"
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-2xl border-2 border-blue-200 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_40px_8px_rgba(30,41,59,0.7)]"
                />
                <img
                  src={about2}
                  alt="Student working on laptop"
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-xl border-2 border-purple-200 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_40px_8px_rgba(30,41,59,0.7)]"
                />
              </div>
            </div>
          </motion.div>
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              About OceaneX
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-6">
              At OceaneX, we believe that learning should go beyond classrooms.<br/>
              We are a technology and innovation platform that connects students with real-world projects, professional mentorship, and hands-on experience.<br/>
              Founded just a year ago, OceaneX has already completed 10+ successful projects across domains like software development, AI, and data science. Our goal is to bridge the gap between education and industry by offering guided internships that prepare students for real-world challenges.
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Learning</li>
              <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Innovation</li>
              <li className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Teamwork</li>
              <li className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Mentorship</li>
              <li className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Growth</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <div className="relative z-10 w-full flex flex-wrap justify-center gap-10 mt-6 mb-12 px-2 md:px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-2xl px-14 py-14 min-w-[240px] max-w-[340px] flex-1 text-center border border-blue-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 cursor-pointer mb-6 md:mb-0">
          <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">1+ Years</div>
          <div className="text-base md:text-xl text-gray-600">in the field <br/>(since 2024)</div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-2xl px-14 py-14 min-w-[240px] max-w-[340px] flex-1 text-center border border-blue-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 cursor-pointer mb-6 md:mb-0">
          <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">10+ Projects</div>
          <div className="text-base md:text-xl text-gray-600">Project Completion</div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-2xl px-14 py-14 min-w-[240px] max-w-[340px] flex-1 text-center border border-blue-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 cursor-pointer">
          <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">8+ Students</div>
          <div className="text-base md:text-xl text-gray-600">Project Completion</div>
        </div>
      </div>
    </>
  );
};

export default About;
