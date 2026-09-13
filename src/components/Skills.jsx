import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaAngular, FaNodeJs, FaPython, FaFigma,
  FaJs, FaHtml5, FaCss3Alt, FaGitAlt,FaDatabase,
  FaAws
} from 'react-icons/fa';
import { SiTensorflow, SiMysql, SiVite ,SiPostman, SiRedux, SiExpress, SiPandas, SiNumpy, SiScikitlearn, SiMongodb, SiTailwindcss, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 90 },
  { name: 'React Native', icon: FaReact ,        color: '#61DAFB', level: 90  },
   { name: 'Tailwind CSS', icon: SiTailwindcss,  color: '#06B6D4', level: 90 },
   { name: 'Redux',        icon: SiRedux,        color: '#764ABC' , level: 85 },
  { name: 'Angular', icon: FaAngular, color: '#DD0031', level: 85 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 88 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 92 },
  { name: 'TypeScript', icon: FaJs, color: '#3178C6', level: 85 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
   { name: 'MySQL',       icon: SiMysql , color: '#4479A1' , level: 87},
    { name: 'Express.js',  icon: SiExpress,     color: '#ffffff', level: 85},
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 88 },
  { name: 'Vite',         icon: SiVite,         color: '#646CFF', level: 87 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 80 },
   { name: 'NumPy',        icon: SiNumpy,        color: '#013243' , level: 87},
      { name: 'Pandas',       icon: SiPandas,       color: '#150458' ,level: 90 },
      { name: 'Scikit-learn', icon: SiScikitlearn,  color: '#F7931E', level: 90 },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 82 },
  { name: 'RAG',          icon: FaDatabase,     color: '#a855f7' ,level: 78},
  { name: 'Postman',    icon: SiPostman ,   color: '#FF6C37' , level: 86},
      { name: 'Figma',      icon: FaFigma,     color: '#F24E1E', level: 92 },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 78 },
  { name: 'AWS', icon: FaAws, color: '#FF9900', level: 72 },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 hover:border-green-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex flex-col items-center">
                <skill.icon 
                  className="text-5xl mb-3" 
                  style={{ color: skill.color }}
                />
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  />
                </div>
                <span className="text-gray-400 text-sm mt-1">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}