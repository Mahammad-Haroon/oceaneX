import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center py-16 px-4">
      <section className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="bg-white/80 rounded-3xl shadow-xl p-6 md:p-10 flex flex-col items-center gap-4 border border-blue-100 relative">
            <div className="flex gap-4 md:gap-6">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/23/18/25/young-1279740_1280.jpg"
                alt="Diverse group collaborating"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-2xl shadow-lg border-2 border-blue-200"
              />
              <img
                src="https://cdn.pixabay.com/photo/2017/01/10/19/05/student-1976107_1280.jpg"
                alt="Student working on laptop"
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl shadow-md border-2 border-purple-200 -ml-6 md:-ml-10"
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/09/32/adult-1868750_1280.jpg"
                alt="Mentor guiding"
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl shadow-md border-2 border-blue-100 -ml-4 md:-ml-8"
              />
            </div>
            <div className="flex gap-4 mt-4 text-blue-400 text-2xl md:text-3xl">
              <FaLaptopCode />
              <FaUsers />
              <FaLightbulb />
              <FaRocket />
            </div>
          </div>
        </motion.div>
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            About OceaneX
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            OceaneX is a technology and innovation platform dedicated to empowering the next generation of tech leaders. We foster a collaborative environment where students and interns learn, innovate, and grow together. Our mission is to bridge the gap between education and industry through mentorship, teamwork, and hands-on digital experiences.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Our workspace is designed to inspire creativity and collaboration, with a focus on diversity, inclusion, and real-world problem solving. At OceaneX, we believe in the power of mentorship, teamwork, and continuous learning to drive digital innovation and personal growth.
          </p>
          <ul className="flex flex-wrap gap-3 mb-6">
            <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Learning</li>
            <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Innovation</li>
            <li className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Teamwork</li>
            <li className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Mentorship</li>
            <li className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Growth</li>
          </ul>
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-200 opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-purple-200 opacity-30 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-1/5 h-1/5 bg-blue-400 opacity-20 rounded-full blur-2xl" />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
