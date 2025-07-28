import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme, isLoaded } = useTheme();

  // Don't render until theme is loaded to prevent flash
  if (!isLoaded) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 left-6 z-50 w-14 h-14 bg-white/90 dark:bg-dark-lighter/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center text-gray-800 dark:text-white hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/30 dark:hover:border-primary/30"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1.1 : 1
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative"
      >
        {isDark ? (
          <FaSun size={22} className="text-yellow-500" />
        ) : (
          <FaMoon size={22} className="text-blue-600" />
        )}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isDark ? 1.5 : 0, opacity: isDark ? 0 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
      />
    </motion.button>
  );
};

export default ThemeToggle; 