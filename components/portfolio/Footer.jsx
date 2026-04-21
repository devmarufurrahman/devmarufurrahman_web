import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer
      id="footer"
      className="bg-slate-900 border-t border-slate-700 py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h3>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Have a project in mind? Feel free to reach out and let&apos;s create
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Send Me an Email
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {portfolioData.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-10 h-10 rounded-full border border-purple-400 text-purple-400 flex items-center justify-center hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                title={social.name}
              >
                <span className="text-sm">↗</span>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Designed & Built with <span className="text-cyan-400">✨</span>{" "}
              using React, Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
