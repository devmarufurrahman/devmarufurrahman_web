import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export default function Languages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="languages" className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Languages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.languages.map((language, index) => (
              <motion.div
                key={language.name}
                variants={itemVariants}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">
                    {language.name}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                    {language.proficiency}
                  </span>
                </div>
                <p className="text-gray-300">{language.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
