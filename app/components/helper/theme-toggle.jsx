"use client";

import { useTheme } from '@/app/context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-yellow-300 text-xl" />
      ) : (
        <FaMoon className="text-blue-200 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;