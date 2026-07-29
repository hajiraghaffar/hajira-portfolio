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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-black'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left Aligned */}
          <motion.a
            href="#hero"
            className="text-3xl font-bold text-green-500 hover:text-green-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Hajira
          </motion.a>

          {/* Navigation - Right Aligned with Grey Background */}
          <div className="hidden md:block">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 px-8 py-3 shadow-2xl">
              <div className="flex items-center gap-12">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-green-500 transition-all duration-300 font-medium text-sm uppercase tracking-wider"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-300 hover:text-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 16 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-300 hover:text-green-500 hover:bg-gray-800 rounded-lg transition-all duration-300 font-medium"
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