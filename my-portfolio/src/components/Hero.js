import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { FaDownload } from "react-icons/fa"; // ✅ Import icon

export default function Hero() {
  const [hoverActive, setHoverActive] = useState(false);

  // ✅ Reset hover effect when user leaves page
  useEffect(() => {
    const handleBeforeUnload = () => setHoverActive(false);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // ✅ Pulse animation (before click only)
  const pulseClass = !hoverActive
    ? "animate-pulse ring-2 ring-white/50 ring-offset-2"
    : "";

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[70vh] px-4 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 text-white">
      {/* 🌌 Stars Background */}
      <AnimatedBackground />

      {/* 👋 Header */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Nigashini{" "}
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
          className="inline-block origin-bottom"
        >
          👋
        </motion.span>
      </motion.h1>

      {/* 💬 Subtitle */}
      <motion.p
        className="text-lg md:text-xl max-w-xl mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A passionate IT student focused on building beautiful, functional websites and solving real-world problems with code.
      </motion.p>

      {/* 📥 Resume Button */}
      <motion.a
        href="Nigashini.K (RESUME_Updated)_103.pdf"
        download
        onClick={() => setHoverActive(true)}
        className={`z-10 px-6 py-3 font-semibold rounded-lg shadow-md flex items-center gap-2
          bg-white text-purple-700
          transition-all duration-300 ease-in-out transform active:scale-95
          ${pulseClass}
          ${hoverActive ? 'hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50' : ''}
        `}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaDownload className="text-sm" /> Download Resume
      </motion.a>
    </section>
  );
}
