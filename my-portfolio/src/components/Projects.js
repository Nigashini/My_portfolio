import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LOCAL_STORAGE_KEY = "portfolio-added-projects";

export default function Projects() {
  const baseProjects = [
    {
      title: "Student Attendance System",
      description: "React-based UI with API integration to manage student data.",
      github: "https://github.com/your-username/attendance-system",
      image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/code.png"
    },
    {
      title: "Kidney Stone Detection",
      description: "Deep learning model for early detection using image processing.",
      github: "https://github.com/your-username/kidney-detection",
      image: "C:\Users\LENOVO\OneDrive\Pictures\kidney image.jpg"
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
    setAddedProjects(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const allProjects = [...baseProjects, ...addedProjects];

  return (
    <section className="max-w-6xl mx-auto mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold border-b pb-2 mb-8 text-purple-600 dark:text-purple-300 text-center">
        Projects
      </h2>

      {/* Add Project Form */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Project Title"
          className="border rounded px-3 py-2"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border rounded px-3 py-2"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="GitHub Link"
          className="border rounded px-3 py-2"
          value={newProject.github}
          onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="border rounded px-3 py-2"
          value={newProject.image}
          onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
        />
      </div>

      <div className="mb-10 text-right">
        <button
          onClick={handleAddProject}
          className="px-6 py-2 bg-purple-600 text-white font-semibold rounded shadow hover:bg-purple-700 transition"
        >
          ➕ Add Project
        </button>
      </div>

      {/* Project Cards */}
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
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 relative"
            >
              {project.image && (
                <img src={project.image} alt={project.title} className="w-12 h-12 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                🔗 View on GitHub
              </a>

              {/* 🗑 Delete button only for user-added */}
              {isUserAdded && (
                <button
                  onClick={() => handleDeleteProject(index - baseProjects.length)}
                  className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-lg"
                  title="Delete this project"
                >
                  🗑
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
