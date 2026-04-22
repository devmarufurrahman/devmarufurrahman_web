"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Link as LinkIcon,
  Code2,
  Smartphone,
  Phone,
  ArrowUp,
} from "lucide-react";

// --- Custom Professional Icons ---
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

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  if (!data) return null;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="bg-[#020617] border-t border-white/5 py-16 relative overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="mb-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-all shadow-xl"
        >
          <ArrowUp size={20} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h3>

          <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed italic font-light">
            Looking for an expert mobile developer for your next big project or
            remote team? I'm always up for a new challenge.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              <Mail size={18} /> Send Me an Email
            </motion.a>
            <motion.a
              href={`tel:${data.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/10 bg-white/5 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> Give a Call
            </motion.a>
          </div>

          {/* Social Icons Container */}
          <div className="flex justify-center gap-5 mb-12">
            {data.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                }}
                className="w-12 h-12 rounded-2xl border border-white/10 text-slate-300 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                title={social.name}
              >
                {getSocialIcon(social.icon)}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-10">
            <p className="text-slate-600 text-sm font-medium tracking-wide">
              © {currentYear} —{" "}
              <span className="text-slate-400 uppercase tracking-widest">
                {data.name}
              </span>
            </p>
            {/* <p className="text-[10px] text-slate-700 mt-2 uppercase font-bold">
              Crafted with Next.js 16 & Firebase
            </p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
