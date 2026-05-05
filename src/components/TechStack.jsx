import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const TechStack = () => {
  // Extract names from skills array
  const allSkills = skills.map(s => s.name);
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="py-20 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 items-center"
        >
          {marqueeItems.map((skill, index) => (
            <div 
              key={index}
              className="text-2xl md:text-4xl font-bold text-white/20 hover:text-accent transition-all duration-300 cursor-default px-4"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
