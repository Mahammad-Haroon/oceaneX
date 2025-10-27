import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBookOpen, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const initialState = { name: "", email: "", phone: "", specialization: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const res = await axios.post(`${API_URL}/api/contact`, form);
      if (res.status === 200) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-20 min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-200 opacity-30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-purple-200 opacity-30 rounded-full blur-2xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-1/5 h-1/5 bg-blue-400 opacity-20 rounded-full blur-2xl -z-10" />
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 z-10 relative">
        {/* Illustration (left) */}
        <motion.div
          className="hidden md:flex flex-1 flex-col items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center border-2 border-blue-100">
            <FaPaperPlane className="text-blue-500 text-7xl mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Let's Connect!</h3>
            <p className="text-blue-600 text-center text-lg">We'd love to hear from you.<br />Send us a message and our team will get back to you soon.</p>
          </div>
        </motion.div>
        {/* Contact Form (right) */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6 border-2 border-blue-100"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-center">Contact Us</h2>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="pl-10 border border-blue-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 border border-blue-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10,15}"
              className="pl-10 border border-blue-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
          </div>
          <div className="relative">
            <FaBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input
              type="text"
              name="specialization"
              placeholder="Specialization (e.g. BCA, MCA, etc.)"
              value={form.specialization}
              onChange={handleChange}
              required
              className="pl-10 border border-blue-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-4 text-blue-400 text-lg" />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="pl-10 border border-blue-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
          </div>
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            <FaPaperPlane className="text-white text-xl" />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
          {status === "success" && (
            <motion.p className="text-green-600 text-center font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Thank you! Your message has been sent.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p className="text-red-600 text-center font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;