import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const LOCAL_STORAGE_KEY = "portfolio-added-certifications";

export default function Certifications() {
  const baseCertifications = [
    {
      title: "Automation Developer Associate – UiPath",
      description: "Certified by UiPath Academy",
      link: "https://drive.google.com/file/d/1qNa4u8WfEOYGYZagA47PN5m8onL7sDpT/view?usp=sharing"
    },
    {
      title: "React.js Crash Course – Udemy",
      description: "Completed a 10.5 hour beginner course on React",
      link: "https://drive.google.com/file/d/1n1NOWWsuo94VLslAgMUdk633Xqm3-gPd/view?usp=sharing"
    },
    {
      title: "Intro to Industry 4.0 and IoT – NPTEL",
      description: "Fundamentals of IoT in smart manufacturing",
      link: "https://drive.google.com/file/d/1j_L5lKb6_K9SwtqmpV45RSDtXCfRsRVV/view?usp=sharing"
    },
    {
      title: "Machine Learning Algorithms – Great Learning",
      description: "Overview of supervised and unsupervised learning",
      link: "https://drive.google.com/file/d/1a8IUTWZhwcYFjUow3bb2Rl8ddFUAZKPs/view?usp=sharing"
    }
  ];

  const [addedCerts, setAddedCerts] = useState([]);
  const [newCert, setNewCert] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setAddedCerts(JSON.parse(stored));
    }
  }, []);

  const handleAddCert = () => {
    if (newCert.title.trim() && newCert.description.trim() && newCert.link.trim()) {
      const updated = [...addedCerts, { ...newCert }];
      setAddedCerts(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setNewCert({ title: "", description: "", link: "" });
    } else {
      alert("Please fill in all fields: Title, Description, and Certificate Link.");
    }
  };

  const handleDeleteCert = (indexToDelete) => {
    const updated = addedCerts.filter((_, index) => index !== indexToDelete);
    setAddedCerts(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  return (
  <motion.section
    className="max-w-4xl mx-auto mb-10 p-6 bg-[#0f0f0f] text-white rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-[#00ff88] border-b border-[#00ff88]/40 pb-3 mb-6 drop-shadow-[0_0_8px_#00ff88] font-['Poppins'] text-center">
      Certifications
    </h2>

    {/* Add Certification Form */}
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        placeholder="Certificate Title"
        className="bg-[#1a1a1a] text-white border border-[#00ff88] px-3 py-2 rounded placeholder:text-gray-400"
        value={newCert.title}
        onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Short Description"
        className="bg-[#1a1a1a] text-white border border-[#00ff88] px-3 py-2 rounded placeholder:text-gray-400"
        value={newCert.description}
        onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Certificate Link (URL)"
        className="bg-[#1a1a1a] text-white border border-[#00ff88] px-3 py-2 rounded placeholder:text-gray-400"
        value={newCert.link}
        onChange={(e) => setNewCert({ ...newCert, link: e.target.value })}
      />
    </div>

    <div className="mb-6 text-right">
      <button
        onClick={handleAddCert}
        className="bg-[#00ff88] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#00dd77] transition hover:shadow-lg hover:shadow-[#00ff8855]"
      >
        ➕ Add Certification
      </button>
    </div>

    <ul className="space-y-4">
      {[...baseCertifications, ...addedCerts].map((cert, index) => {
        const isUserAdded = index >= baseCertifications.length;
        return (
          <li
            key={index}
            className="bg-[#1a1a1a] border border-[#00ff88]/10 p-4 rounded-xl shadow flex justify-between items-start flex-wrap gap-4"
          >
            <div className="flex-1 min-w-[250px]">
              <p className="text-lg font-semibold text-[#00ff88]">{cert.title}</p>
              <p className="text-sm text-gray-300 mt-1">{cert.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm bg-[#00ff88] text-black rounded hover:bg-[#00dd77] transition hover:shadow-md hover:shadow-[#00ff8870]"
              >
                📄 View Certificate
              </a>
              {isUserAdded && (
                <button
                  onClick={() => handleDeleteCert(index - baseCertifications.length)}
                  className="text-red-500 hover:text-red-700 text-lg"
                  title="Delete certification"
                >
                  🗑
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </motion.section>
);
}
