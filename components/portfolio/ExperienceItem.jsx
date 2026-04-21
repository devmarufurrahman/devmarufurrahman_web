import { motion } from 'framer-motion';

export default function ExperienceItem({ role, company, duration, description, index }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-8 border-l-2 border-purple-400"
    >
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="absolute -left-4 top-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-slate-900"
      />

      <motion.div
        whileHover={{ x: 10 }}
        className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 border border-slate-600 hover:border-purple-400 transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-purple-400 mb-1">
          {role}
        </h3>
        <p className="text-gray-400 font-semibold mb-2">
          {company}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          {duration}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
