import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSocketdotio } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const projects = [
    {
      id: 1,
      title: 'متجر إلكتروني متكامل',
      description: 'تطبيق متجر إلكتروني كامل مع نظام إدارة المنتجات، المدفوعات، والمخزون',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
      icons: [FaReact, FaNodeJs, SiExpress, SiMongodb],
      github: 'https://github.com/ahmedelmahdi133',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'تطبيق محادثات في الوقت الفعلي',
      description: 'تطبيق محادثات متقدم مع ميزات متعددة المستخدمين',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=500&h=300&fit=crop',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      icons: [FaReact, FaNodeJs, SiSocketdotio, SiMongodb],
      github: 'https://github.com/ahmedelmahdi133',
      live: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Twitter Bot',
      description: 'بوت تويتر ذكي للتفاعل التلقائي وإدارة المحتوى',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
      category: 'Backend',
      technologies: ['JavaScript', 'Node.js', 'Twitter API', 'Vercel'],
      icons: [FaNodeJs],
      github: 'https://github.com/ahmedelmahdi133/tweeter_bot',
      live: 'https://tweeter-bot-cyan.vercel.app',
      featured: false
    }
  ];

  const filters = ['الكل', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding section-bg-light dark:section-bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            مشاريعي
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            مجموعة من المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 space-x-reverse">
                  <a
                    href={project.github}
                    className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    مميز
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2 space-x-reverse">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon
                        key={iconIndex}
                        size={20}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ahmedelmahdi133"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 space-x-reverse"
          >
            <FaGithub size={20} />
            <span>عرض المزيد على GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 