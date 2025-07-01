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
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center">
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
              className="p-0 bg-transparent border-none cursor-pointer"
              aria-label={`Rate ${starValue} stars`}
            >
              <Star
                size={18}
                className={`transition-colors duration-200 ${
                  isHovered ? 'text-orange-400 fill-orange-400' : 
                  isRated ? 'text-yellow-400 fill-yellow-400' : 
                  'text-gray-300'
                }`}
              />
            </button>
          );
        })}
      </div>
      <span className="text-sm text-gray-700 font-medium pt-0.5">
        {Number(initialRating).toFixed(1)}
      </span>
      <span className="text-xs text-gray-500 pt-0.5">
        ({totalRatings})
      </span>
    </div>
  );
};

export default StarRating;