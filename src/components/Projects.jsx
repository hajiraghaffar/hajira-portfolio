import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "AI Voice Detector",
    desc: "Advanced voice classification system using MFCC features and TensorFlow. Real-time detection with React frontend and Python backend.",
    tech: ["React", "Python", "TensorFlow", "Node.js"],
    live: "https://ai-voice-detector.vercel.app",
    github: "https://github.com/hajira-ghaffar/ai-voice-detector",
    featured: true
  },
  {
    title: "University Admission System",
    desc: "Comprehensive full-stack platform with role-based authentication, 25+ REST APIs, and real-time dashboard for students and admins.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://admission-system.vercel.app",
    github: "https://github.com/hajira-ghaffar/admission-system",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce solution with payment integration, inventory management, and real-time order tracking.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    live: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/hajira-ghaffar/ecommerce-platform",
    featured: false
  },
  {
    title: "Task Management Dashboard",
    desc: "Real-time task management system with drag-and-drop, team collaboration, and analytics dashboard.",
    tech: ["React", "Firebase", "Tailwind", "Chart.js"],
    live: "https://task-dashboard.vercel.app",
    github: "https://github.com/hajira-ghaffar/task-dashboard",
    featured: false
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900/20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {project.featured && (
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold mb-3">
                  Featured Project
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3">
                <FaCode className="text-3xl text-green-500" />
                <div className="flex gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}