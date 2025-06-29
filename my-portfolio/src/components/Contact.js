import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto p-6 bg-[#0f0f0f] text-white rounded-xl shadow-lg mb-10"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#00ff88] border-b border-[#00ff88]/40 pb-3 mb-6 drop-shadow-[0_0_8px_#00ff88] font-['Poppins'] text-center">
        Contact
      </h2>

      {/* Contact Details */}
      <div className="space-y-5 text-lg font-medium font-['Poppins']">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#00ff88] text-xl hover:scale-110 transition-transform" />
          <a
            href="mailto:nigashinikumar1@gmail.com"
            className="hover:text-[#00ff88] transition-colors"
          >
            nigashinikumar1@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaGithub className="text-[#00ff88] text-xl hover:scale-110 transition-transform" />
          <a
            href="https://github.com/Nigashini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition-colors"
          >
            github.com/Nigashini
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaLinkedin className="text-[#00ff88] text-xl hover:scale-110 transition-transform" />
          <a
            href="https://www.linkedin.com/in/nigashini-k-076319285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ff88] transition-colors"
          >
            linkedin.com/in/nigashini-k-076319285
          </a>
        </div>
      </div>
    </motion.section>
  );
}
