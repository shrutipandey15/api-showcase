import React from 'react';
import { Bookmark, BookmarkCheck, ExternalLink, Zap } from 'lucide-react';
import { categories } from '../data/categories';
import StarRating from './StarRating';

const badgeClasses = {
  animals: 'from-emerald-400 to-cyan-400',
  data: 'from-blue-400 to-sky-400',
  fun: 'from-purple-400 to-pink-400',
  tools: 'from-slate-400 to-gray-500',
  finance: 'from-yellow-400 to-amber-500',
  science: 'from-indigo-400 to-violet-500',
  quotes: 'from-rose-400 to-red-500',
  books: 'from-orange-400 to-amber-500',
  food: 'from-lime-400 to-green-500',
  games: 'from-red-500 to-rose-500',
  geography: 'from-teal-400 to-cyan-500',
  music: 'from-pink-500 to-fuchsia-500',
  health: 'from-green-400 to-emerald-500',
  business: 'from-sky-500 to-indigo-500',
  education: 'from-blue-500 to-violet-500',
  arts: 'from-fuchsia-500 to-purple-600',
  default: 'from-gray-400 to-gray-500',
};

const APICard = ({ api, isBookmarked, onToggleBookmark, onTryApi, onRateApi }) => {
  const categoryInfo = categories.find(c => c.id === api.category);
  const badgeClass = badgeClasses[api.category] || badgeClasses.default;

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
      
      <div className="relative p-8 flex-grow flex flex-col">
        <div className="mb-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {api.name}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
            {api.description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex items-center justify-between">
            <span className={`bg-gradient-to-r ${badgeClass} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transform group-hover:scale-105 transition-transform duration-300 capitalize`}>
              {categoryInfo?.icon} {api.category}
            </span>
          </div>
          
          <StarRating 
            apiId={api.id}
            initialRating={api.rating}
            totalRatings={api.ratingCount}
            onRate={onRateApi}
          />
        </div>
      </div>
      
      <div className="relative p-8 pt-6">
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
