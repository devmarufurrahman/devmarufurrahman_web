"use client";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

export default function Experience({ experience }) {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!experience) return null;

  return (
    <section
      id="experience"
      className="py-24 bg-linear-to-b from-slate-950 to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              Work Experience
            </span>
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-linear-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto relative"
        >
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-linear-to-b from-purple-500/50 via-slate-800 to-transparent hidden sm:block" />

          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
