import React, { useState } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ apiId, initialRating = 0, totalRatings = 0, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating) => {
    if (onRate) {
      onRate(apiId, newRating);
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          const isHovered = starValue <= hoverRating;
          const isRated = starValue <= initialRating;

          return (
            <button
              key={starValue}
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 bg-transparent border-none cursor-pointer transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-full"
              aria-label={`Rate ${starValue} stars`}
            >
              <Star
                size={20}
                className={`transition-all duration-300 ${
                  isHovered 
                    ? 'text-orange-400 fill-orange-400 transform scale-110' 
                    : isRated 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300 hover:text-gray-400'
                }`}
              />
            </button>
          );
        })}
      </div>
      
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full shadow-md">
          <span className="text-sm font-bold">
            {Number(initialRating).toFixed(1)}
          </span>
        </div>
        
        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
          <span className="text-xs font-medium">
            {totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
