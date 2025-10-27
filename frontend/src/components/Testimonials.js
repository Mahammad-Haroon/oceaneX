import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const profileImg = require('../profile.jpg');
const testimonials = [
  {
    name: "Anuvindh K",
    degree: "BCA, Srinivas University",
    service: "Paytm Fraud Detection System",
    img: profileImg,
    text: "Learned so much from real projects. Mentors were super helpful and supportive!",
  },
  {
    name: "Pranav U",
    degree: "BCA, Srinivas University",
    service: "Blue Room",
    img: profileImg,
    text: "Got hands-on experience that boosted my skills and confidence.",
  },
  {
    name: "MOHAMMED ATHES",
    degree: "MCA, Yenepoya University",
    service: "Kannada Handwriting Recognization",
    img: profileImg,
    text: "Amazing guidance throughout my internship. Truly industry-level exposure.",
  },
  {
    name: "AYISHATHUL FAIZA",
    degree: "MCA, Yenepoya University",
    service: "Skin Disease Prediction",
    img: profileImg,
    text: "Professional, organized, and full of learning. Loved working with OceaneX!",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  // Mouse parallax effect for
  const handleMouseMove = (e) => {
    const cards = containerRef.current.querySelectorAll('.testimonial-card');
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    cards.forEach((card) => {
      const dx = (x - centerX) / centerX;
      const dy = (y - centerY) / centerY;
      card.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.04)`;
    });
  };
  const handleMouseLeave = () => {
    const cards = containerRef.current.querySelectorAll('.testimonial-card');
    cards.forEach((card) => {
      card.style.transform = '';
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 drop-shadow-lg tracking-tight">Don’t Trust Us, Trust our Students</h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card relative w-full max-w-[350px] bg-white rounded-3xl shadow-2xl hover:shadow-blue-300/60 p-8 flex flex-col items-center text-center border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 group scale-100 hover:scale-105"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.18, duration: 0.8, type: 'spring' }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full blur-xl opacity-60 group-hover:scale-110 transition-transform duration-300 z-0"></div>
              <img src={t.img} alt={t.name} className="relative z-10 w-20 h-20 rounded-full mb-3 object-cover border-4 border-blue-300 shadow-lg group-hover:border-blue-500 transition-all duration-300" />
              <h3 className="text-lg font-bold text-blue-800 mb-1 mt-1 group-hover:text-blue-900 transition-colors duration-200">{t.name}</h3>
              <p className="text-blue-600 text-sm mb-1">{t.degree}</p>
              <p className="text-blue-500 text-sm mb-1">Project: {t.service}</p>
              <div className="flex justify-center items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 text-xs" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-2 mt-1">"{t.text}"</p>
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none border border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
