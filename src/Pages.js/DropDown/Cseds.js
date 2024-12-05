import React, { useState } from "react";

const CSEDS = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Content for each section
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About the Department</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
            CSE(DS) Department was established in the academic year 2020-2021 with an intake of 180 Artificial Intelligence (AI) is any technique that enables computers to mimic human intelligence. AI is an interdisciplinary science with multiple approaches to build smart machines capable of performing tasks that typically require human intelligence. Data Science (DS) is an umbrella term for a group of fields that are used to analyze large datasets. It is the field of study that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
            Data Science is a comprehensive process that involves pre-processing, analysis, visualization and prediction. On the other hand, AI is the implementation of a predictive model to forecast future events. Data Science comprises of various statistical techniques whereas AI makes use of computer algorithms. With Data Science, we build models that use statistical insights. On the other hand, AI is for building models that emulate cognition and human understanding. Data Science does not involve a high degree of scientific processing as compared to AI
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
            Companies are focusing on AI-centric growth that can operate on algorithms and hence enable better customer experience. To enable the graduating students to be ready for the paradigm shift B.E. programme in CSE DS is designed to provide the foundations for job roles like, AI Engineer, AI Data Analyst, Data Engineer, Data Scientist, etc in the evolving job market scenario.
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
          CSE - Data Science
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

export default CSEDS;
