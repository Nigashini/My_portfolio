import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-300">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        A proactive and enthusiastic final-year IT student with a solid academic foundation and hands-on
        experience in technology and programming. Seeking opportunities to apply my skills...
      </p>
    </motion.section>
  );
}
