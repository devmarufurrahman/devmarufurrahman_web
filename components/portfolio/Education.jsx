"use client";
import { motion } from "framer-motion";

export default function Education({ education }) {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  if (!education) return null;

  return (
    <section
      id="education"
      className="py-20 bg-linear-to-b from-[#020617] to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-linear-to-r from-purple-400 to-pink-400 rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900/50 md:bg-white/5 md:backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-slate-500 text-sm mb-3">{edu.field}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
                    {edu.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
