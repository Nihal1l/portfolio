import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container-custom">
        {/* Section Title like the image */}
        <div className="flex items-center gap-4 mb-16">
          {/* <h2 className="text-3xl font-mono flex items-center">
            <span className="text-accent mr-1">#</span>
            <span className="text-white">Technologies and skills</span>
          </h2> */}
          <h2 className="text-4xl font-bold mb-4">Technologies & <span className="text-accent">Skills</span></h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              {/* Square Box with Border */}
              <div className="w-28 h-28 border border-white/20 flex items-center justify-center mb-3 group-hover:border-accent/50 transition-colors duration-300">
                <img 
                  src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              {/* Label */}
              <span className="text-white/60 font-mono text-sm tracking-tighter group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
