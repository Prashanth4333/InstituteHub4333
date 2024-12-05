import React from "react";
import { motion } from "framer-motion";

const CoursesPrograms = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Design */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div
          className="w-64 h-64 bg-gradient-to-tr from-blue-300 to-purple-400 rounded-full absolute -top-10 -left-20"
          style={{ filter: "blur(120px)" }}
        ></div>
        <div
          className="w-64 h-64 bg-gradient-to-br from-green-300 to-yellow-300 rounded-full absolute top-20 right-0"
          style={{ filter: "blur(120px)" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Programs
        </motion.h2>

        <motion.p
          className="mb-12 text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At InstituteHub, we offer diverse programs tailored to meet the needs
          of students and professionals. Begin your academic journey or gain
          specialized skills with our innovative courses.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Undergraduate Programs",
              description:
                "Bachelor's degrees in Arts, Science, Engineering, and more.",
            },
            {
              title: "Postgraduate Programs",
              description:
                "Master's and PhD programs to deepen your knowledge.",
            },
            {
              title: "Professional Courses",
              description:
                "Industry-oriented courses to make you job-ready.",
            },
            {
              title: "Certifications",
              description:
                "Enhance your profile with recognized certifications.",
            },
            {
              title: "Workshops & Seminars",
              description:
                "Interactive workshops led by industry experts.",
            },
            {
              title: "Research Programs",
              description:
                "Innovative research opportunities in cutting-edge fields.",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              className="group relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full group-hover:animate-pulse"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded shadow hover:shadow-lg hover:from-blue-600 hover:to-green-500 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPrograms;
