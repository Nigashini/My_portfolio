import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto mb-10 p-6 bg-[#0f0f0f] text-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-[#00ff88] border-b border-[#00ff88]/40 pb-3 mb-5 drop-shadow-[0_0_8px_#00ff88] font-['Poppins']">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed tracking-wide font-['Poppins']">
        I’m a proactive and enthusiastic final-year IT student with a strong academic foundation and hands-on
        experience in software development. Passionate about building elegant, functional applications using modern
        web technologies and continuously expanding my technical skill set. I'm currently seeking opportunities to
        apply what I’ve learned and grow with a forward-thinking tech team.
      </p>
    </motion.section>
  );
}
