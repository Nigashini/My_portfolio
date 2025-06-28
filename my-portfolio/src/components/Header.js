import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 rounded-2xl shadow-lg mb-10 text-center">
      <h1 className="text-5xl font-extrabold">Nigashini K</h1>
      <p className="text-xl mt-3">Aspiring Software Engineer | Front-End Developer</p>
      <div className="flex justify-center space-x-6 mt-5 text-white">
        <a href="https://github.com/Nigashini" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
        <a href="https://www.linkedin.com/in/nigashini-k-076319285" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
        <a href="mailto:nigashinikumar1@gmail.com"><FaEnvelope size={28} /></a>
      </div>
    </header>
  );
}