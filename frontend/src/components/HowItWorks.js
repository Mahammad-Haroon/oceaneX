import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaProjectDiagram, FaCertificate, FaComments } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserGraduate className="text-3xl text-blue-600 mb-2" />,
    title: "Apply & Connect",
    desc: "Submit your application and connect with mentors.",
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-blue-600 mb-2" />,
    title: "Work on Projects",
    desc: "Collaborate on real-world projects in your chosen domain.",
  },
  {
    icon: <FaComments className="text-3xl text-blue-600 mb-2" />,
    title: "Get Mentorship",
    desc: "Receive guidance and feedback from industry experts.",
  },
  {
    icon: <FaCertificate className="text-3xl text-blue-600 mb-2" />,
    title: "Earn Certificate",
    desc: "Complete your internship and receive a certificate.",
  },
];

const HowItWorks = () => (
  <section id="howitworks" className="py-16 bg-blue-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            {step.icon}
            <h3 className="text-lg font-semibold text-blue-800 mb-1">{step.title}</h3>
            <p className="text-blue-700 text-base">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
