import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Have a project? <br />
              <span className="text-gradient">Let's talk!</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg mb-12 max-w-md"
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-accent" />, label: "Email", value: personalInfo.email },
                { icon: <Phone className="text-accent" />, label: "Phone", value: personalInfo.phone },
                { icon: <MapPin className="text-accent" />, label: "Location", value: personalInfo.location },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="What's this about?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me more about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
