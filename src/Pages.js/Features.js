import React from "react";

const Features = () => {
  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large Floating Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-transparent rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-tl from-blue-400 to-transparent rounded-full opacity-50 blur-2xl"></div>
        {/* Geometric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-200/50 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide mb-6">
          Explore Our Features
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          InstituteHub empowers institutions with tools for seamless
          management. Stay ahead with advanced features tailored for education.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Cards */}
          {[
            {
              title: "Event Management",
              description:
                "Plan and execute events effortlessly with our all-in-one solution.",
            },
            {
              title: "Calendar Integration",
              description:
                "Track schedules, deadlines, and events all in one place.",
            },
            {
              title: "Resource Allocation",
              description:
                "Distribute resources effectively to maximize efficiency.",
            },
            {
              title: "Communication Tools",
              description:
                "Enable seamless communication between staff and students.",
            },
            {
              title: "Reporting & Analytics",
              description:
                "Gain insights with real-time reports on performance and usage.",
            },
            {
              title: "Student & Staff Portals",
              description:
                "Provide personalized portals for organized access to resources.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl p-6 rounded-xl hover:shadow-3xl hover:-translate-y-2 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4">
                <button className="text-indigo-600 font-medium hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
