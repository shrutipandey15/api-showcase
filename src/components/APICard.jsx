import React from 'react';
import { Bookmark, BookmarkCheck, Play, ExternalLink } from 'lucide-react';
import { categories } from '../data/categories';
import StarRating from './StarRating';

const APICard = ({ api, isBookmarked, onToggleBookmark, onTryApi, onRateApi }) => {
  const categoryInfo = categories.find(c => c.id === api.category);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {api.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {api.description}
            </p>
          </div>
          <button
            onClick={() => onToggleBookmark(api.id)}
            className={`p-2 rounded-full transition-all duration-200 ${
              isBookmarked 
                ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100' 
                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
            }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${api.category === 'animals' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
            {categoryInfo?.icon} {api.category}
          </span>
          <StarRating 
            apiId={api.id}
            initialRating={api.rating}
            totalRatings={api.ratingCount}
            onRate={onRateApi}
          />
        </div>
      </div>
      
      <div className="p-6 pt-4 mt-auto">
        <div className="flex gap-3">
          <button
            onClick={() => onTryApi(api)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <Play size={16} />
            Try API
          </button>
          <a
            href={api.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            Docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default APICard;