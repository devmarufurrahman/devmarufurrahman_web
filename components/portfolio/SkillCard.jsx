import { motion } from 'framer-motion';

export default function SkillCard({ category, items, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-purple-400 transition-all duration-300 shadow-lg"
    >
      <h3 className="text-xl font-bold text-purple-400 mb-6">
        {category}
      </h3>

      <div className="space-y-3">
        {items.map((skill, idx) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            />
            <span className="text-gray-300 font-medium hover:text-purple-400 transition-colors">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
