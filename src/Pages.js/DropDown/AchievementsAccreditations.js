import React from 'react';
import { motion } from 'framer-motion';

const AchievementsAccreditations = () => {
  const cards = [
    {
      title: 'Top Ranked University',
      description: 'Ranked among the top 10 institutions in the country.',
    },
    {
      title: 'Global Accreditation',
      description:
        'Recognized by leading global accrediting bodies for excellence in education.',
    },
    {
      title: '100% Placement Rate',
      description:
        'Guaranteed job placements for all graduating students with global recruiters.',
    },
    {
      title: 'Research Excellence Award',
      description:
        'Recognized for groundbreaking research in technology and innovation.',
    },
    {
      title: 'Strong Industry Partnerships',
      description:
        'Collaborating with over 200 leading companies globally for internships and research.',
    },
    {
      title: 'Innovation Hub of the Year',
      description:
        'Awarded for fostering innovation and entrepreneurship through incubation centers.',
    },
    {
      title: 'Community Impact Award',
      description:
        'Recognized for outstanding contributions to local and global communities.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-gray-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Achievements & Accreditations
        </motion.h2>
        <motion.p
          className="mb-12 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At InstituteHub, we take pride in our achievements and accreditations
          that reflect our commitment to excellence in education, research, and
          innovation.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-6 hover:bg-blue-600 group transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner group-hover:bg-white group-hover:text-blue-600">
                <i className="fas fa-trophy text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-gray-200">
                {card.description}
              </p>
              <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:text-white">
                Learn More
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsAccreditations;
