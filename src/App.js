import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`font-sans ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#071e17] to-[#00ff88] text-white">
        <Navbar />
        <div className="pt-20 px-4">
          <div className="flex justify-end mb-4">
            
          </div>

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
