import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
          <p className="text-white/40">My technical toolkit and expertise</p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold capitalize text-white/80 border-l-4 border-accent pl-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 flex items-center justify-center gap-3 hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <span className="text-accent font-bold text-sm">{skill[0]}</span>
                    </div>
                    <span className="font-medium text-white/70 text-sm whitespace-nowrap">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
