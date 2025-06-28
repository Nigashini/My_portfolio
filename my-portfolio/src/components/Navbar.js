import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-purple-700 dark:text-purple-300">Nigashini</h1>
        <ul className="flex space-x-4">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/skills">Skills</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/certifications">Certifications</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

      </div>
    </nav>
  );
}
