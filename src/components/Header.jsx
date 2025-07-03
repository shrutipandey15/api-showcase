import React from 'react';
import { Search, Filter, Bookmark, Sparkles } from 'lucide-react';

const Header = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories, onShowBookmarks, showOnlyBookmarked }) => {
  return (
    <header className="bg-white shadow-xl border-b border-gray-100 sticky top-0 z-20 backdrop-blur-md bg-opacity-95">
      <div className="container-modern py-12">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div style={{animation: 'float 3s ease-in-out infinite'}}>
              <Sparkles className="text-purple-500" size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              Public API Showcase
            </h1>
            <div style={{animation: 'float 3s ease-in-out 1.5s infinite'}}>
              <Sparkles className="text-pink-500" size={28} />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover, test, and rate amazing APIs with our 
            <span className="text-gradient-alt font-semibold"> interactive showcase</span>
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={22} />
            <input
              type="text"
              placeholder="Search for amazing APIs..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="input-modern pl-12 pr-6 py-4 text-lg placeholder-gray-400 shadow-lg hover:shadow-xl focus:shadow-colored"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          <div className="relative group">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={22} />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="input-modern pl-12 pr-12 py-4 text-lg appearance-none bg-white min-w-[240px] cursor-pointer shadow-lg hover:shadow-xl focus:shadow-colored"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <button
            onClick={onShowBookmarks}
            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] ${
              showOnlyBookmarked 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-colored transform hover:scale-105' 
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-300 hover:text-yellow-600 hover:bg-yellow-50'
            }`}
          >
            <Bookmark size={20} className={showOnlyBookmarked ? 'animate-pulse' : ''} />
            My Bookmarks
            {showOnlyBookmarked && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
