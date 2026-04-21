import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';
import { portfolioData } from '@/lib/portfolio-data';

export default function Experience() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              description={exp.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
