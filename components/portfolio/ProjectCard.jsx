import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-20"
          whileHover={{ opacity: 0.3 }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-slate-700"
        >
          {project.title.charAt(0)}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30 font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 border-2 border-purple-400 text-purple-400 text-sm font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 text-center"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
