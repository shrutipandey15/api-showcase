import React from 'react';
import { Bookmark, BookmarkCheck, Play, ExternalLink, Zap } from 'lucide-react';
import { categories } from '../data/categories';
import StarRating from './StarRating';

const APICard = ({ api, isBookmarked, onToggleBookmark, onTryApi, onRateApi }) => {
  const categoryInfo = categories.find(c => c.id === api.category);
  
  const getBadgeClass = (category) => {
    switch (category) {
      case 'animals':
        return 'badge-animals';
      case 'entertainment':
        return 'badge-entertainment';
      default:
        return 'badge-default';
    }
  };

  return (
    <div className="card-modern group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => onToggleBookmark(api.id)}
          className={`bookmark-btn ${isBookmarked ? 'bookmark-active' : 'bookmark-inactive'}`}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {isBookmarked ? (
            <BookmarkCheck size={22} className="star-glow" />
          ) : (
            <Bookmark size={22} />
          )}
        </button>
      </div>
      
      <div className="relative p-8 flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {api.name}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
            {api.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center justify-between">
            <span className={`${getBadgeClass(api.category)} transform group-hover:scale-105 transition-transform duration-300`}>
              {categoryInfo?.icon} {api.category}
            </span>
            <div className="bg-white rounded-full px-3 py-1 shadow-md border border-gray-100">
              <span className="text-xs font-medium text-gray-500">API</span>
            </div>
          </div>
          
          <StarRating 
            apiId={api.id}
            initialRating={api.rating}
            totalRatings={api.ratingCount}
            onRate={onRateApi}
          />
        </div>
      </div>
      
      <div className="relative p-8 pt-0">
        <div className="flex gap-4">
          <button
            onClick={() => onTryApi(api)}
            className="btn-primary flex-1 flex items-center justify-center gap-3 text-base"
          >
            <Zap size={18} className="group-hover:animate-pulse" />
            Test API
          </button>
          <a
            href={api.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-3 px-6"
          >
            <ExternalLink size={18} />
            Docs
          </a>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 rounded-br-full transform -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default APICard;