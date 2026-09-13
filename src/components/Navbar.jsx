import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6"
    >
      <div className="container-custom">
        {/* Desktop Centered Pill Menu */}
        <div className="hidden md:flex justify-center">
          <div
            className={`flex items-center gap-8 px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-500 ${
              scrolled
                ? 'bg-black/60 border-white/10 shadow-lg shadow-purple-500/10'
                : 'bg-white/5 border-white/10'
            }`}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {/* Underline glow on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Top Bar */}
        <div className="md:hidden flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
          <span className="text-white font-semibold tracking-wider text-sm uppercase">
            Hajira
          </span>
          <button
            className="text-2xl text-gray-300 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 12 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-5 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                  whileHover={{ x: 8 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}