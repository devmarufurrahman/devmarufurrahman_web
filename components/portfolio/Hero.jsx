import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

const getSocialIcon = (iconType) => {
  const icons = {
    github: '🔗',
    linkedin: '💼',
    whatsapp: '💬',
    mail: '✉️'
  };
  return icons[iconType] || '↗';
};

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-[#020617] via-slate-900 to-[#020617] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-32 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          {/* Profile Image Placeholder */}
          <motion.div 
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: ['0 0 20px rgba(168, 85, 247, 0.3)', '0 0 40px rgba(168, 85, 247, 0.6)', '0 0 20px rgba(168, 85, 247, 0.3)'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden"
              >
                {portfolioData.profileImage && portfolioData.profileImage !== "/profile-image.jpg" ? (
                  <img 
                    src={portfolioData.profileImage} 
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-purple-400">
                    <div className="text-5xl mb-2">📷</div>
                    <p className="text-xs text-gray-400">Replace with your image</p>
                  </div>
                )}
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full border-2 border-slate-900"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Hey, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
                {portfolioData.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
                {portfolioData.bio}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
          >
            Contact Me
            </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-6"
            >
          {portfolioData.social.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-full border-2 border-purple-400 text-purple-400 flex items-center justify-center hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 text-lg font-bold"
              title={social.name}
            >
              {getSocialIcon(social.icon)}
              </motion.a>
            ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-purple-400 text-2xl">↓</div>
      </motion.div>
    </section>
  );
}
