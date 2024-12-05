import React, { useState } from "react";

const CSECS = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Content for each section
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About the Department</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            B.Tech CSE (Cybersecurity) is designed to address the industry’s increasing demand for skilled security professionals in the public and private sector, both in the Data Security and in the Network/Cloud Security domains. .
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The program covers core computer science subjects as well as cybersecurity specific courses. The emphasis of the program is to nurture students with the knowledge and skills required to secure computers, detect and analyse attacks and threats, respond to attacks, develop security policies, procedures, and standards.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
            The four-year undergraduate curriculum includes a sound preparation in Basic Sciences, Mathematical Foundations, Cybersecurity, Cryptography and Network Security, Secure Programming and Ethical hacking
            </p>
          </div>
        );
      case "vision":
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To bestow academic excellence by imparting profound knowledge in the area of Computer Science and Engineering, facilitating research and
              professional skills to serve the ever-changing industry and society.
            </p>
          </div>
        );
      case "pos":
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Programme Educational Objectives (PEOs)</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Graduates with fundamental knowledge in mathematics, sciences, humanities, and computer science engineering for contributing to industry and research.</li>
              <li>Graduates capable of solving real-life problems and designing novel products useful to society.</li>
              <li>To improve creative and interpersonal skills in multidisciplinary platforms while practicing ethical values.</li>
            </ul>
          </div>
        );
      case "faculty":
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Faculty Details</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our faculty comprises highly qualified professionals with expertise in diverse areas of Computer Science, offering mentorship and guidance to nurture
              innovative minds.
            </p>
          </div>
        );
      default:
        return <p className="text-lg leading-relaxed text-gray-700">Select a section to view details.</p>;
    }
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-clip-text text-blue-500">
          B.Tech CSE (Cybersecurity)
          </h1>
          <p className="mt-4 text-xl text-gray-600">Where Innovation Meets Excellence</p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="md:w-1/4  rounded-xl p-6">
            <ul className="space-y-4">
              {["about", "vision", "pos", "faculty"].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full block py-3 px-5 rounded-lg text-lg font-medium tracking-wide relative group transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 w-0 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out z-0`}
                    ></span>
                    <span className="relative z-10">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content Section */}
          <main className="md:w-3/4 bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CSECS;
