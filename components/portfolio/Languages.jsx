"use client";
import { motion } from "framer-motion";

export default function Languages({ languages }) {
  if (!languages) return null; // Safety check

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="languages"
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Languages
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </motion.div>

          {/* Languages Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-4xl bg-slate-900/60 md:bg-white/5 md:backdrop-blur-md border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/80 md:hover:bg-white/8 hover:-translate-y-1 md:hover:scale-[1.02] transition-all duration-500 group shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
                      {language.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-black px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full uppercase tracking-widest">
                    {language.proficiency}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed font-medium pl-2 border-l-2 border-purple-500/30 group-hover:border-purple-500 transition-all">
                  {language.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
