import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaServer, FaDatabase } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: FaCode, title: 'Frontend', desc: 'React, Angular, Vue.js' },
    { icon: FaServer, title: 'Backend', desc: 'Node.js, Python, Express' },
    { icon: FaDatabase, title: 'Database', desc: 'MongoDB, PostgreSQL, MySQL' },
    { icon: FaMobile, title: 'Responsive', desc: 'Mobile-first design' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mb-12">
            Software Engineer passionate about building innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a software engineer with a passion for creating elegant, 
              scalable solutions. With expertise in modern web technologies, 
              I bridge the gap between design and functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire 
              to solve complex problems. I believe in writing clean, 
              maintainable code that makes a difference.
            </p>
          </motion.div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center hover:border-green-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="text-4xl text-green-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}