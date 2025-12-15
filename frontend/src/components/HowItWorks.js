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


const HowItWorks = () => null;

export default HowItWorks;
