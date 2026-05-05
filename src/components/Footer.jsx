import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">Nihal<span className="text-accent">.</span></div>
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Pankaj Nihal. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a href={personalInfo.profiles.github} target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-accent/20 transition-all text-white/60 hover:text-white">
              <Github size={20} />
            </a>
            <a href={personalInfo.profiles.linkedin} target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-accent/20 transition-all text-white/60 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white/5 rounded-xl hover:bg-accent/20 transition-all text-white/60 hover:text-white">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-4 bg-accent/10 border border-accent/20 rounded-full hover:bg-accent/20 transition-all text-accent group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
