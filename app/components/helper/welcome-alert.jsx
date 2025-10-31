"use client";

import { useEffect, useState } from 'react';
import { FaRocket, FaTimes } from 'react-icons/fa';

const WelcomeAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show welcome alert after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Auto hide after 8 seconds
    const autoHideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-1 rounded-2xl shadow-2xl">
        <div className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-pulse"></div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaTimes />
          </button>

          {/* Content */}
          <div className="flex items-center space-x-4 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center animate-spin-slow">
                <FaRocket className="text-white text-xl" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                🎉 Welcome to My Portfolio!
              </h3>
              <p className="text-gray-300 text-sm">
                Explore my journey as a Full Stack Developer. Let's build something amazing together! ✨
              </p>
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-75 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAlert;