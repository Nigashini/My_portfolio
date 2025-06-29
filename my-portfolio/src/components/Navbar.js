import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* 🌟 Typing Brand with Pacifico + Neon Glow */}
        <Link
          to="/"
          className="text-xl sm:text-2xl text-[#00ff88] whitespace-nowrap drop-shadow-[0_0_5px_#00ff88]"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          <Typewriter
            words={['Web With Nigashini']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </Link>

        {/* 🧭 Navigation Links */}
        <ul className="flex space-x-4 text-sm sm:text-base font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#00ff88] hover:drop-shadow-[0_0_5px_#00ff88] transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
