import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900/20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        <div className="relative w-full min-h-[80vh] flex justify-center items-center ">
          {/* Left Column */}
          {/* Background Animated Gradient - Behind everything */}
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        'radial-gradient(circle at 20% 50%, rgba(29, 211, 150, 0.15) 0%, transparent 60%)',
        'radial-gradient(circle at 80% 50%, rgba(101, 205, 170, 0.15) 0%, transparent 60%)',
        'radial-gradient(circle at 20% 50%, rgba(104, 198, 167, 0.15) 0%, transparent 60%)',
      ],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
  {/* Animated Border Ring - Left */}
  <motion.div
    className="absolute left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-green-500/10"
    animate={{
      rotate: 360,
      scale: [1, 1.05, 0.95, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500/30" />
  </motion.div>

  {/* Animated Border Ring - Right */}
  <motion.div
    className="absolute right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-500/10"
    animate={{
      rotate: -360,
      scale: [1, 0.95, 1.05, 1],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500/30" />
  </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to new opportunities and collaborations. 
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.02, borderColor: '#10b981' }}
                >
                  <FaEnvelope className="text-green-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium">hajra.ghaffar19@email.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.02, borderColor: '#10b981' }}
                >
                  <FaPhone className="text-green-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-white font-medium">+92 300 1234567</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.02, borderColor: '#10b981' }}
                >
                  <FaMapMarker className="text-green-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white font-medium">Pakistan</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.a
                  href="https://github.com/hajira-ghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-green-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/hajira-ghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-green-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaLinkedin />
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}