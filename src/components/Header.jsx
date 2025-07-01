import React from 'react';
import { Search, Filter, Bookmark } from 'lucide-react';

const Header = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories, onShowBookmarks, showOnlyBookmarked }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Public API Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated list of APIs with dynamic ratings, ready to test.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search APIs by name or description..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full md:w-auto pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onShowBookmarks}
            className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-lg font-medium transition-colors ${
              showOnlyBookmarked 
                ? 'bg-yellow-400 text-white border-yellow-400 hover:bg-yellow-500' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Bookmark size={16} />
            My Bookmarks
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;