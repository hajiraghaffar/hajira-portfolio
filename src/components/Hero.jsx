import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import heroImage from '../assets/img2.png'; // Make sure your image is in src/assets/

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-2xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
            >
              <span className="text-green-400 text-sm font-medium">🚀 Available for Work</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-white">Hajira Ghaffar</span>
              
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-green-400 font-semibold"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
            >
              Building scalable web applications with modern technologies. 
              Passionate about creating elegant solutions to complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-500/50 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-green-600 text-green-400 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href="https://github.com/hajira-ghaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hajira-ghaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/hajira-ghaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaTwitter />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 blur-2xl opacity-20 animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-green-500/30 shadow-2xl shadow-green-500/20 overflow-hidden">
                {heroImage ? (
                  <img 
                    src={heroImage} 
                    alt="Hajira Ghaffar" 
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-900/30 to-emerald-900/30 flex items-center justify-center">
                    <span className="text-8xl md:text-9xl">👩‍💻</span>
                  </div>
                )}
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-600 rounded-full p-3 shadow-xl shadow-green-600/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xl">✨</span>
              </motion.div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                className="absolute -bottom-2 -left-2 bg-emerald-600 rounded-full p-3 shadow-xl shadow-emerald-600/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-xl">💻</span>
              </motion.div>

              {/* Stats Card - Floating */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-gray-900/90 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">1+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </motion.div>

              {/* Stats Card - Floating Left */}
              <motion.div
                className="absolute -top-8 -left-8 bg-gray-900/90 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">5+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
            <FaArrowDown className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}