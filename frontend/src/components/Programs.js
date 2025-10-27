import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRobot, FaChartBar, FaShieldAlt } from "react-icons/fa";

const programs = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-3" />,
    title: "Frontend Web Development",
    desc: "Frontend internships with real-world projects and modern frameworks.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-3" />,
    title: "Full Stack Web Development",
    desc: "Full stack internships covering both frontend and backend skills.",
  },
  {
    icon: <FaRobot className="text-4xl text-blue-600 mb-3" />,
    title: "AI & Machine Learning",
    desc: "Hands-on experience in AI/ML with expert mentors.",
  },
  {
    icon: <FaChartBar className="text-4xl text-blue-600 mb-3" />,
    title: "Data Science & Analytics",
    desc: "Work on data-driven projects and analytics tools.",
  },
];

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7 },
  }),
};

const Programs = () => (
  <section id="programs" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">Our Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.title}
            className="bg-blue-50 rounded-2xl shadow-lg p-7 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            initial="initial"
            whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.15)" }}
            animate="animate"
            custom={i}
            variants={cardVariants}
          >
            {prog.icon}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{prog.title}</h3>
            <p className="text-blue-700 text-base">{prog.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
