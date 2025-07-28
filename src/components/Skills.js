import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaFigma
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiJest, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'الواجهة الأمامية (Frontend)',
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
        { name: 'Next.js', icon: SiNextdotjs, level: 75, color: '#000000' },
        { name: 'Redux', icon: SiRedux, level: 80, color: '#764ABC' },
      ]
    },
    {
      title: 'الخلفية والخوادم (Backend)',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 80, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
        { name: 'SQL', icon: FaDatabase, level: 70, color: '#336791' },
      ]
    },
    {
      title: 'أدوات وتقنيات أخرى',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, level: 70, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, level: 65, color: '#FF9900' },
        { name: 'Figma', icon: FaFigma, level: 75, color: '#F24E1E' },
        { name: 'Jest', icon: SiJest, level: 75, color: '#C21325' },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding section-bg-light dark:section-bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            مهاراتي التقنية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            التقنيات والأدوات التي أستخدمها في تطوير المشاريع
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="card p-6 text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300">
                      <skill.icon 
                        size={32} 
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            مهارات أخرى
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'RESTful APIs', 'GraphQL', 'Context API', 'React Hooks', 'State Management',
              'Testing Library', 'Webpack', 'Vite', 'Performance Optimization', 'API Integration',
              'Database Design', 'Authentication', 'JWT', 'Middleware', 'Error Handling',
              'Responsive Design', 'SEO', 'Agile/Scrum', 'Problem Solving', 'Team Collaboration'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 