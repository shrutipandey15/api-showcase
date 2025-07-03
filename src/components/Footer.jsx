import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="relative z-10 container-modern py-12">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="text-purple-400 floating" size={24} />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              API Showcase
            </h3>
            <Sparkles className="text-pink-400 floating-delayed" size={20} />
          </div>
          
          <div className="flex justify-center items-center gap-2 text-gray-300 text-lg mb-4">
            <span>Built with</span>
            <Heart className="text-red-400 animate-pulse" size={20} />
            <span>using</span>
            <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Code className="text-blue-400" size={18} />
              <span className="font-semibold">React & Tailwind CSS</span>
            </div>
          </div>
          
          <p className="text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Exploring the wonderful world of public APIs with modern web technologies. 
            Rate, bookmark, and discover amazing APIs for your next project.
          </p>
          
          <div className="mt-8 pt-6 border-t border-purple-700">
            <div className="flex justify-center items-center gap-6 text-sm text-purple-300">
              <span>© 2024 API Showcase</span>
              <span>•</span>
              <span>Made for developers</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles size={14} />
                Open Source
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;