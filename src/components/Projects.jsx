import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const hasLink = (url) => Boolean(url && url.trim());

const projects = [
  {
    title: "AI Voice Detector",
    desc: "Advanced voice classification system using MFCC features and TensorFlow. Real-time detection with React frontend and Python backend.",
    tech: ["React", "Python", "TensorFlow", "Node.js"],
    
    github: "https://github.com/hajiraghaffar/ai-voice-detector",
    featured: false
  },
  {
    title: "University Admission System",
    desc: "Comprehensive full-stack platform with role-based authentication, 25+ REST APIs, and real-time dashboard for students and admins.",
    tech: ["React", "Node.js", "MYSQL", "Tailwind"],
    github: "https://github.com/hajiraghaffar/studyadvisor",
    featured: false
  },
  {
    title: "Car Parking System",
    desc: "Smart parking management system with real-time slot booking, QR-based entry/exit, and admin analytics dashboard.",
    tech: ["React", "Node.js", "Tailwind", "MongoDB"],
    github: "https://github.com/hajiraghaffar/smartpark",
    live: null,
    featured: false
  },
  {
    title: "Multi Agent Workspace",
    desc: "Collaborative AI workspace where multiple autonomous agents handle tasks like research, writing, and code review in real time.",
    tech: ["React", "Python", "FastAPI", "Pandas", "LangGraph"],
    featured: false,
    github: "https://github.com/hajiraghaffar/multi-agent-workflow-engine",
    showIcons: false,
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative">
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
                  {/* GitHub */}
                  {hasLink(project.github) ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      aria-label="GitHub repository"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  ) : (
                    <motion.span
                      className="text-gray-600 cursor-not-allowed"
                      whileHover={{ scale: 1.1 }}
                      title="GitHub link not available"
                      aria-label="GitHub not available"
                    >
                      <FaGithub size={20} />
                    </motion.span>
                  )}

                  {/* Live */}
                  {hasLink(project.live) ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  ) : (
                    <motion.span
                      className="text-gray-600 cursor-not-allowed"
                      whileHover={{ scale: 1.1 }}
                      title="Live demo not available"
                      aria-label="Live demo not available"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.span>
                  )}
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