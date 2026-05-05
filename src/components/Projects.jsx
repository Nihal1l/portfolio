// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Loader2 } from "lucide-react";

// ---------- Skeleton card (loading placeholder) ----------
const SkeletonCard = () => (
  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-[320px] animate-pulse flex flex-col justify-between">
    <div className="space-y-4">
      <div className="h-6 bg-white/10 rounded-md w-3/4" />
      <div className="h-20 bg-white/5 rounded-md w-full" />
    </div>
    <div className="flex gap-2">
      <div className="h-6 bg-white/10 rounded-full w-16" />
      <div className="h-6 bg-white/10 rounded-full w-16" />
    </div>
  </div>
);

// ---------- Individual project card ----------
const ProjectCard = ({ project, index }) => {
  const tech = project.topics?.slice(0, 3) || (project.language ? [project.language] : []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
      className="group relative bg-gradient-to-br from-black via-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-500 rounded-3xl p-8 h-[320px] flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1 text-white"
    >
      {/* Background number for a subtle effect */}
      <div className="absolute bottom-[-20px] right-2 text-[180px] font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
        {index + 1}
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white-900 leading-tight pr-8 break-words">
            {project.name?.replace(/-/g, " ")}
          </h3>
          <div className="p-2 bg-black/5 rounded-full group-hover:bg-accent/10 transition-colors">
            <ArrowUpRight className="text-gray-900 group-hover:text-accent transition-colors" size={24} />
          </div>
        </div>
        <p className="text-gray-600 line-clamp-4 leading-relaxed font-medium">
          {project.description || "No description provided for this repository."}
        </p>
      </div>

      {/* Footer – tech tags & links */}
      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-black/5 text-gray-500 text-xs font-bold rounded-full uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-widest hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} /> Repository
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-widest hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ---------- Main Projects component ----------
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const GITHUB_USERNAME = "Nihal1l";

  // Fetch repositories from GitHub – sorted by stars (most popular first)
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=stargazers_count`
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        const filtered = data.filter((repo) => !repo.fork);
        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const handleNext = () => setVisibleCount((prev) => prev + 6);
  const hasMore = visibleCount < repos.length;

  return (
    <section id="projects" className="py-24 bg-black-gradient relative">
      <div className="container-custom">
        {/* Title */}
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            projects<span className="text-accent">.</span>
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-white/20 to-transparent mt-4" />
        </div>

        {/* Error handling */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-2xl text-center mb-12">
            <p>Error loading projects: {error}</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : repos.slice(0, visibleCount).map((repo, idx) => (
                  <ProjectCard key={repo.id} project={repo} index={idx} />
                ))}
          </AnimatePresence>
        </div>

        {/* Next button */}
        {!loading && hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 flex justify-center"
          >
            <button
              onClick={handleNext}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                <ArrowUpRight className="text-white rotate-90 group-hover:rotate-45 transition-transform duration-500" size={32} />
              </div>
              <span className="text-white font-bold uppercase tracking-widest text-sm">Next</span>
            </button>
          </motion.div>
        )}

        {/* Global spinner while additional pages are being fetched (fallback) */}
        {loading && repos.length > 0 && (
          <div className="mt-20 flex justify-center">
            <Loader2 className="text-accent animate-spin" size={40} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
