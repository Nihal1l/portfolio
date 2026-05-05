import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">Qualifications & <span className="text-accent">Experience</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/5" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-accent bg-primary z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>

                <div className="glass-card p-8 hover:border-accent/30 transition-colors">
                  <span className="text-accent text-sm font-semibold tracking-wider">{item.period}</span>
                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <div className="text-white/60 font-medium mb-4">{item.company}</div>
                  <p className="text-white/40 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {item.tech && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-white/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
