"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
    >
      {/* --- Project Image / Preview --- */}
      <div className="h-56 relative overflow-hidden">
        {project.image && project.image !== "url-to-image" ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-slate-900 to-blue-900/40 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-7xl font-black text-white/10 select-none"
            >
              {project.title.charAt(0)}
            </motion.div>
            <Code2 size={40} className="absolute text-purple-500/40" />
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-3 w-full">
            <a
              href={project.demo}
              target="_blank"
              className="flex-1 bg-white text-black py-2 rounded-xl text-xs font-black text-center hover:bg-purple-500 hover:text-white transition-all"
            >
              LIVE PREVIEW
            </a>
          </div>
        </div>
      </div>

      {/* --- Content --- */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <div className="flex gap-3 text-slate-400">
            <motion.a
              whileHover={{ scale: 1.2, color: "#a855f7" }}
              href={project.link}
              target="_blank"
              title="Source Code"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#a855f7" }}
              href={project.demo}
              target="_blank"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        <p className="text-purple-300/80 text-xs font-bold uppercase tracking-widest mb-4">
          {project.description}
        </p>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 font-medium">
          {project.longDescription}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-black rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-all uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
