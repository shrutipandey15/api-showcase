import React from 'react';
import APICard from './APICard';

const APIGrid = ({ apis = [], bookmarkedApis, onToggleBookmark, onTryApi, onRateApi, showOnlyBookmarked }) => {
  if (apis.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          {showOnlyBookmarked
            ? "You haven't bookmarked any APIs yet. Click the bookmark icon on a card to save it!"
            : "No APIs found matching your criteria. Try a different search or category."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {apis.map(api => (
        <APICard
          key={api.id}
          api={api}
          isBookmarked={bookmarkedApis.includes(api.id)}
          onToggleBookmark={onToggleBookmark}
          onTryApi={onTryApi}
          onRateApi={onRateApi}
        />
      ))}
    </div>
  );
};

export default APIGrid;
