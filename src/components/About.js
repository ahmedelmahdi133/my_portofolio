import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'تطوير الويب',
      description: 'متخصص في تطوير تطبيقات الويب الحديثة باستخدام React و JavaScript'
    },
    {
      icon: FaLaptopCode,
      title: 'تصميم واجهات',
      description: 'أقوم بتصميم واجهات مستخدم جميلة وسهلة الاستخدام'
    },
    {
      icon: FaUsers,
      title: 'عمل جماعي',
      description: 'أعمل بشكل جيد في الفرق وأتواصل بفعالية مع العملاء'
    },
    {
      icon: FaLightbulb,
      title: 'حلول مبتكرة',
      description: 'أقدم حلولاً مبتكرة ومبتكرة للمشاكل التقنية'
    }
  ];

  return (
    <section id="about" className="section-padding section-bg-light dark:section-bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            من أنا
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            مطور ويب شغوف بإنشاء تجارب رقمية مميزة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 lg:w-80 lg:h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src="/images/profile-photo.jpg"
                    alt="Ahmed Elmahdi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold hidden">
                    A
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              مرحباً! أنا مطور Full Stack متخصص
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              لدي خبرة في تطوير تطبيقات الويب الكاملة باستخدام React للواجهة الأمامية و Node.js للخلفية. 
              أحب العمل على مشاريع تحدي وتطوير حلول تقنية متكاملة.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              أؤمن بأهمية إنشاء تطبيقات عالية الأداء مع واجهات مستخدم مميزة. 
              أعمل دائماً على تطوير مهاراتي في مجال تطوير الويب الكامل.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                React
              </div>
              <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                Node.js
              </div>
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Express.js
              </div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                MongoDB
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 