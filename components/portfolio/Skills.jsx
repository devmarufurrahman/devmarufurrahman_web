"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
// ❌ Static import টি ডিলিট করা হয়েছে

// ✅ এখানে { skills } প্রপস রিসিভ করা হচ্ছে মেইন page.jsx থেকে
export default function Skills({ skills }) {
  if (!skills) return null; // Safety check if data is missing

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
      id="skills"
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          <p className="mt-6 text-slate-400 font-medium max-w-2xl mx-auto italic">
            I build high-performance mobile apps with the technical skills and
            tools I have acquired over my 3 years of experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category || index}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
