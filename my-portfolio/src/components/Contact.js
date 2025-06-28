import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-10"
    >
      <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-300">
        Contact
      </h2>

      <div className="space-y-4 text-gray-800 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-purple-600 transition-transform hover:scale-110" />
          <a
            href="mailto:nigashinikumar1@gmail.com"
            className="hover:text-purple-500 transition-colors"
          >
            nigashinikumar1@gmail.com
          </a>
        </div>



        <div className="flex items-center gap-3">
          <FaGithub className="text-purple-600 transition-transform hover:scale-110" />
          <a
            href="https://github.com/Nigashini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            github.com/Nigashini
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaLinkedin className="text-purple-600 transition-transform hover:scale-110" />
          <a
            href="https://www.linkedin.com/in/nigashini-k-076319285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            linkedin.com/in/nigashini-k-076319285
          </a>
        </div>
      </div>
    </motion.section>
  );
}
