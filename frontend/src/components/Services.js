import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaPalette, FaShareAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    title: "Website Development",
    desc: "Building modern, responsive websites that deliver performance and results.",
    link: "#",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-blue-600 mb-4" />,
    title: "E-commerce Solutions",
    desc: "Conversion-focused storefronts, payments, and integrations that scale revenue.",
    link: "#",
  },
  {
    icon: <FaPalette className="text-4xl text-blue-600 mb-4" />,
    title: "Project Guide",
  desc: "Step-by-step guidance for students and teams to plan, execute, and complete real-world projects with confidence.",
    link: "#",
  },
  {
    icon: <FaShareAlt className="text-4xl text-blue-600 mb-4" />,
    title: "Social Media Management",
    desc: "We manage and grow your social channels with engaging content and smart strategies.",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7 },
  }),
};

const Services = () => (
  <section
    className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" id="services"
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      {/* Main heading and description on the right */}
      <div className="w-full md:w-1/2 md:order-2 flex flex-col items-end">
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 text-right drop-shadow-lg">
          Services We Provide
        </h2>
        <p className="text-right text-blue-700 mb-6 max-w-xl text-lg">
          We handle everything to turn your local business into a digital brand. Get your domain, professional email, conversion-ready website with payments built in.
        </p>
        {/* Service section image with black shadow background */}
        <div className="relative flex justify-end w-full mb-4">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[420px] h-[260px] md:w-[560px] md:h-[340px] rounded-2xl bg-blue-900 opacity-50 blur-xl z-0"></div>
          <img
            src={require('../service section.jpg')}
            alt="Service Section"
            className="relative z-10 w-[420px] h-[260px] md:w-[560px] md:h-[340px] object-cover rounded-2xl shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_8px_rgba(30,41,59,0.7)]"
            style={{ boxShadow: '0 12px 48px 0 rgba(30,58,138,0.55)' }}
          />
        </div>
      </div>
      {/* Cards on the left */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 md:order-1">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 min-w-[180px] max-w-[220px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={i}
            variants={cardVariants}
          >
            {service.icon}
            <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-blue-700 text-sm md:text-base mb-3">{service.desc}</p>
            <a
              href={service.link}
              className="text-blue-600 font-medium hover:underline transition text-sm"
            >
               &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
