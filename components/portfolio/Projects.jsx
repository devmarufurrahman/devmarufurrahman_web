"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  if (!projects) return null; // Safety check

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-linear-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          <p className="mt-6 text-slate-400 font-medium max-w-2xl mx-auto italic">
            Some of my best work, where I tried to combine innovation and
            performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
