"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ data }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!data) return null;

  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Home", "Skills", "Experience", "Projects", "Education"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-slate-950/95 md:bg-slate-950/80 md:backdrop-blur-xl z-50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-20 flex items-center justify-between">
          {/* --- Logo / Branding --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleScroll("home")}
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/60 shadow-lg shadow-purple-500/10 transition-all duration-500">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/40";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-none">
                dev
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  marufur
                </span>
                rahman
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-1">
                Portfolio
              </span>
            </div>
          </motion.div>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleScroll(item.toLowerCase())}
                className="px-5 py-2 text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
              </motion.button>
            ))}
          </div>

          {/* --- Action Buttons & Mobile Toggle --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => handleScroll("footer")}
              className="hidden sm:block px-6 py-2.5 bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-xl text-sm font-black text-white transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Hire Me
            </button>

            {/* ✅ Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 active:scale-95 transition-all"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Menu Icon
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full bg-slate-950/95 border-b border-white/5 z-40 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="w-full text-left py-3 text-lg font-black text-slate-300 hover:text-purple-400 border-b border-white/5 last:border-none transition-colors"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => handleScroll("footer")}
                className="mt-4 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-base font-black text-white shadow-lg shadow-purple-500/20 active:scale-95 transition-all"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
