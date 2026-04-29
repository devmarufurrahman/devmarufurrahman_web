"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceItem({
  role,
  company,
  duration,
  description,
  index,
}) {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-10 pb-12 last:pb-0 group"
    >
      <div className="absolute left-0 top-2 bottom-0 w-px bg-linear-to-b from-purple-500 via-slate-700 to-transparent group-last:bg-linear-to-b group-last:from-purple-500 group-last:to-transparent" />

      <div className="absolute -left-4.5 top-1 w-9 h-9 bg-slate-900 rounded-xl border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-colors duration-300 group-hover:bg-purple-500">
        <Briefcase
          size={16}
          className="text-purple-400 group-hover:text-white transition-colors"
        />
      </div>

      {/* Experience Content Card - ✅ Mobile Optimized */}
      <div className="bg-slate-900/50 md:bg-white/5 md:backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/80 md:hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">
              {role}
            </h3>
            <p className="text-purple-300/80 font-bold text-sm md:text-base uppercase tracking-widest mt-1">
              {company}
            </p>
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black self-start md:self-center">
            {duration}
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed font-light italic text-base md:text-lg">
          {description}
        </p>

        {role.toLowerCase().includes("lead") && (
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-green-400 font-bold uppercase tracking-tighter">
              Leadership Role
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
