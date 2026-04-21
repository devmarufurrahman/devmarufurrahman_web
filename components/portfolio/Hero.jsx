"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Link as LinkIcon, Code2, Smartphone } from "lucide-react";

// --- Custom Professional Icons (Replaces Emojis) ---
const GithubIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
  </svg>
);

const getSocialIcon = (iconType) => {
  const type = iconType?.toLowerCase();
  switch (type) {
    case "github":
      return <GithubIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "whatsapp":
      return <WhatsappIcon />;
    case "mail":
      return <Mail size={20} />;
    default:
      return <LinkIcon size={20} />;
  }
};

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-b from-[#020617] via-slate-900 to-[#020617] flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-1/4 w-125 h-125 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-1/4 w-100 h-100 bg-blue-600 rounded-full mix-blend-screen filter blur-[150px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 mb-12">
          {/* --- Refined Profile Image Section --- */}
          <motion.div
            variants={itemVariants}
            className="shrink-0 relative flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-87.5 md:h-87.5 flex items-center justify-center mt-8 lg:mt-0">
              {/* Animated Glow Ring */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3.75 rounded-[60px] md:rounded-[80px] bg-linear-to-tr from-purple-600 via-pink-500 to-blue-500 opacity-40 blur-2xl group-hover:opacity-70 group-hover:blur-3xl transition-all duration-700"
              />

              {/* Image Container */}
              <div className="relative w-full h-full aspect-square rounded-[40px] md:rounded-[60px] p-1 bg-linear-to-b from-purple-500/50 to-blue-500/50 shadow-2xl shadow-purple-900/40 z-10 overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-[36px] md:rounded-[56px] overflow-hidden bg-[#0a0f1e]">
                  {portfolioData.profileImage ? (
                    <img
                      src={portfolioData.profileImage}
                      alt={portfolioData.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-purple-400/50 bg-slate-900">
                      <Smartphone size={50} strokeWidth={1} />
                      <p className="text-sm mt-3 font-medium">Add Image</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-slate-950/90 border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <Code2 className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">
                    Top Skill
                  </p>
                  <p className="text-base font-bold text-white tracking-tight">
                    Flutter Expert
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- Refined Text Content --- */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Hey, I&apos;m <br className="hidden lg:block" />
                <span className="bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-300 font-medium mb-6">
                {portfolioData.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {portfolioData.bio}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/10 text-white rounded-xl font-bold bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                onClick={() => scrollToSection("footer")}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {portfolioData.social.map((social, index) => (
                <motion.a
                  key={social.name || index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 text-slate-300 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
}
