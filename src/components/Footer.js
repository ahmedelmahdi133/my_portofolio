import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ahmedelmahdi133', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmed-elmahdi-0a6b97357/', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary">Ahmed Elmahdi</h3>
            <p className="text-gray-400 leading-relaxed">
              مطور Full Stack متخصص في React و Node.js. 
              أحب العمل على مشاريع تحدي وتطوير تطبيقات ويب متكاملة ومميزة.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  عني
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  المهارات
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  تواصل
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">معلومات التواصل</h4>
            <div className="space-y-2 text-gray-400">
              <p>البريد الإلكتروني: a.elmahdi1333@gmail.com</p>
              <p>الهاتف: +201063114260</p>
              <p>الموقع: المنوفية، مصر</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} جميع الحقوق محفوظة. تم التطوير بـ{' '}
            <FaHeart className="inline text-red-500 mx-1" />
            {' '}باستخدام React و Node.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 