import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Home", "Skills", "Experience", "Projects", "Education"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-xl z-50 border-b border-purple-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/20 shrink-0">
            <img
              src={portfolioData.profileImage}
              alt="Maruf"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40";
              }}
            />
          </div>
          <span className="text-xl font-bold text-white ml-3">
            dev
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              marufur
            </span>
            rahman
          </span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden flex items-center gap-2"
        >
          <button className="text-purple-400 hover:text-purple-300 transition-colors">
            Menu
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
