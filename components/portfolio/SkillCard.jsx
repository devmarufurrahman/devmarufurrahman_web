"use client";
import { motion } from "framer-motion";
import { Cpu, CheckCircle2 } from "lucide-react";

export default function SkillCard({ category, items, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1 + idx * 0.05, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-slate-900/60 md:bg-white/5 md:backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/80 md:hover:bg-white/10 hover:-translate-y-2 md:hover:scale-[1.02] transition-all duration-500 shadow-xl relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-500 hidden md:block" />

      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-500 shrink-0">
          <Cpu size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
          {category}
        </h3>
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 gap-4 relative z-10">
        {items.map((skill, idx) => (
          <motion.div
            key={skill}
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 group/item"
          >
            <div className="shrink-0">
              <CheckCircle2
                size={18}
                className="text-purple-500 group-hover/item:text-pink-500 group-hover/item:scale-110 transition-all duration-300"
              />
            </div>
            <span className="text-slate-300 font-bold text-sm md:text-base tracking-wide group-hover/item:text-white transition-colors">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
