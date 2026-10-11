import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendar, FaMapMarker } from 'react-icons/fa';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Compuwiz Technologies",
    location: "Remote",
    period: "2024",
    description: [
      "Developing scalable web applications using React and Node.js",
      "Implementing RESTful APIs and microservices architecture",
      "Mentoring junior developers and conducting code reviews",
      "Optimizing application performance and reducing load times by 40%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "CwizTech",
    location: "Onsite, Gujrat",
    period: "2025-2026",
    description: [
      "Built responsive UI components with React, Angular and Tailwind CSS",
      "Optimized application performance and loading times",
      "Collaborated with design team on UX improvements",
      "Implemented CI/CD pipeline for automated deployments"
    ]
  },
  
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 ">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card"
            >
              <div className="flex flex-wrap items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <FaBriefcase className="text-green-500 text-sm" />
                    <span>{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <FaMapMarker className="text-green-500 text-sm" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                  <FaCalendar className="text-sm" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="text-gray-400 flex items-start gap-2 text-sm"
                  >
                    <span className="text-green-500 mt-1">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}