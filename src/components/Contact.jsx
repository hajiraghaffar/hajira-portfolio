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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
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
                    <p className="text-white font-medium">hajira.ghaffar@email.com</p>
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
                <motion.a
                  href="https://twitter.com/hajira-ghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-green-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            ref={ref}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}