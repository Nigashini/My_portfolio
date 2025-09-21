import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LOCAL_STORAGE_KEY = "portfolio-added-projects";

export default function Projects() {
  const baseProjects = [
    {
      title: "Student Attendance System",
      description: "React-based UI with API integration to manage student data.",
      github: "https://github.com/Nigashini/attendance_management_system",
      image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/code.png"
    },
    {
      title: "Kidney Stone Detection",
      description: "Deep learning model for early detection using image processing.",
      github: "https://github.com/Nigashini/Kidney_Stone_Detection_24",
      image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/medical.png"
    },
    {
      title: "Road Pavement Analyzer",
      description: "Automated road condition analysis using deep learning.",
      github: "https://github.com/your-username/road-analyzer",
      image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/data-configuration.png"
    }
  ];

  const [addedProjects, setAddedProjects] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setAddedProjects(JSON.parse(stored));
    }
  }, []);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    github: "",
    image: ""
  });

  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.github) {
      const updated = [...addedProjects, newProject];
      setAddedProjects(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setNewProject({ title: "", description: "", github: "", image: "" });
    } else {
      alert("Please fill in Title, Description, and GitHub Link.");
    }
  };

  const handleDeleteProject = (indexToDelete) => {
    const updated = addedProjects.filter((_, index) => index !== indexToDelete);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    setAddedProjects(updated);
  };

  const allProjects = [...baseProjects, ...addedProjects];

  return (
    <section className="max-w-10xl mx-auto mb-10 p-6 bg-[#0f0f0f] text-white rounded-xl shadow-md">
      
      {/* ✅ Fade-in Section Title */}
      <motion.h2
        className="text-3xl font-bold text-[#00ff88] border-b border-[#00ff88]/40 pb-3 mb-6 drop-shadow-[0_0_8px_#00ff88] font-['Poppins'] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* 🔤 Add Project Form */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {["title", "description", "github", "image"].map((field, i) => (
          <input
            key={i}
            type="text"
            placeholder={field === "image" ? "Image URL (optional)" : `Project ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            className="bg-[#1a1a1a] text-white border border-[#00ff88] rounded px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
            value={newProject[field]}
            onChange={(e) => setNewProject({ ...newProject, [field]: e.target.value })}
          />
        ))}
      </div>

      {/* ✅ Tooltip + Add Project Button */}
      <div className="mb-10 text-right relative group inline-block">
        <button
          onClick={handleAddProject}
          className="px-6 py-2 bg-[#00ff88] text-black font-semibold rounded-full shadow-md hover:bg-[#00dd77] hover:shadow-[#00ff8855] transition"
        >
          ➕ Add Project
        </button>
        {/* Tooltip */}
        <span className="absolute -top-10 right-0 bg-black text-white text-sm px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add your own custom project
        </span>
      </div>

      {/* 🧱 Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => {
          const isUserAdded = index >= baseProjects.length;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 relative border border-[#00ff88]/20"
            >
              <div className="flex items-center gap-3 mb-4">
              {project.image && (
                <img src={project.image} alt={project.title} className="w-12 h-12 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2 text-[#00ff88]">
                {project.title}
              </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-[#00ff88] text-black rounded-full hover:bg-[#00dd77] transition shadow hover:shadow-[#00ff8870]"
              >
                🔗 View on GitHub
              </a>

              {/* ✅ Delete Button with Animation */}
              {isUserAdded && (
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDeleteProject(index - baseProjects.length)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg transition"
                  title="Delete this project"
                >
                  🗑
                </motion.button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
