import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const LOCAL_STORAGE_KEY = "portfolio-skills";

export default function Skills() {
  // 🗂️ Initial structure
  const defaultSkills = {
    "Frontend Skills": ["HTML", "CSS", "JavaScript"],
    "Frameworks": ["React.js (Beginner)"],
    "Programming": ["C", "Java"],
    "Database Management": ["MySQL"],
    "Tools": ["Figma", "Git", "GitHub"],
    "Emerging Technologies": ["AI & ML (Basic Understanding)"],
  };

  const [skills, setSkills] = useState(defaultSkills);
  const [category, setCategory] = useState("Frontend Skills");
  const [newSkill, setNewSkill] = useState("");

  // 📦 Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setSkills(JSON.parse(stored));
    }
  }, []);

  // 💾 Save to localStorage when skills update
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  // ➕ Add skill to selected category
  const handleAddSkill = () => {
    if (newSkill.trim() === "") return;
    const updated = {
      ...skills,
      [category]: [...skills[category], newSkill.trim()]
    };
    setSkills(updated);
    setNewSkill("");
  };

  return (
    <motion.section
        className="max-w-4xl mx-auto mb-10 p-6 bg-[#0f0f0f] text-white rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

    <section className="max-w-6xl mx-auto mb-10 p-6 bg-[#0f0f0f] text-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-[#00ff88] border-b border-[#00ff88]/40 pb-3 mb-6 drop-shadow-[0_0_8px_#00ff88] font-['Poppins'] text-center">
        Technical Skills
      </h2>

      {/* 🧾 Add Skill Form */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#1a1a1a] text-white border border-[#00ff88] px-3 py-2 rounded"
        >
          {Object.keys(skills).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter new skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 bg-[#1a1a1a] text-white border border-[#00ff88] px-3 py-2 rounded placeholder:text-gray-400"
        />

        <button
          onClick={handleAddSkill}
          className="bg-[#00ff88] text-black font-semibold px-4 py-2 rounded-full hover:bg-[#00dd77] transition"
        >
          ➕ Add
        </button>
      </div>

      {/* 🗂️ Render categorized skills */}
      <div className="space-y-6 text-gray-300">
        {Object.entries(skills).map(([category, subskills], index) => (
          <div key={index}>
            <h3 className="text-xl text-[#00ff88] font-semibold mb-2">{category}</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              {subskills.map((skill, i) => (
                <li key={i} className="text-gray-200">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
}
