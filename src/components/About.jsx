import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, services, stats } from '../data/portfolioData';
import { Layout, Server, Webhook } from 'lucide-react';

const iconMap = {
  Layout: <Layout className="text-accent" size={32} />,
  Server: <Server className="text-accent" size={32} />,
  Webhook: <Webhook className="text-accent" size={32} />,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Services Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex gap-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors h-fit">
                  {iconMap[service.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Text & Stats */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              About <span className="text-accent">Me</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed mb-12"
            >
              {personalInfo.summary}
            </motion.p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
