import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeIndicator = () => {
  const { isDark, isLoaded } = useTheme();

  if (!isLoaded) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 right-6 z-40 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border"
        style={{
          backgroundColor: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          borderColor: isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)',
          color: isDark ? '#f3f4f6' : '#374151'
        }}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
        >
          {isDark ? '🌙 الوضع الليلي' : '☀️ الوضع النهاري'}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeIndicator; 