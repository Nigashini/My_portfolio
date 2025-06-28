import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "portfolio-added-skills";

export default function Skills() {
  const baseSkills = [
    "HTML", "CSS", "JavaScript", "React.js (Beginner)", "C", "Java", "MySQL", "Figma", "Git", "GitHub", "Basics of AI & ML"
  ];

  const [addedSkills, setAddedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setAddedSkills(JSON.parse(stored));
    }
  }, []);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      const updated = [...addedSkills, newSkill.trim()];
      setAddedSkills(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (indexToDelete) => {
    const updated = addedSkills.filter((_, index) => index !== indexToDelete);
    setAddedSkills(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <section className="max-w-4xl mx-auto mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-purple-600 dark:text-purple-300">Technical Skills</h2>

      {/* Add Skill Form */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Add a new skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button
          onClick={handleAddSkill}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          ➕ Add
        </button>
      </div>

      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        {baseSkills.map((skill, index) => (
          <li key={`base-${index}`}>{skill}</li>
        ))}
        {addedSkills.map((skill, index) => (
          <li key={`added-${index}`} className="list-item flex justify-between items-center">

            {skill}
            <button
              onClick={() => handleDeleteSkill(index)}
              className="text-red-500 hover:text-red-700 ml-4 text-sm"
              title="Delete skill"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
