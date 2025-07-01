import React, { useState, useEffect, useMemo } from 'react';
import { apis as apiData } from './data/apiData';
import { categories } from './data/categories';
import Header from './components/Header';
import APIGrid from './components/APIGrid';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { db } from './firebase'; 
import { collection, getDocs, doc, setDoc, increment } from "firebase/firestore";

const App = () => {
  const [apis, setApis] = useState(apiData);
  const [ratings, setRatings] = useState({});
  const [filteredApis, setFilteredApis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedApis, setBookmarkedApis] = useState([]);
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedApis')) || [];
    setBookmarkedApis(savedBookmarks);
    
    const fetchRatings = async () => {
      try {
        const ratingsCollection = collection(db, "ratings");
        const ratingsSnapshot = await getDocs(ratingsCollection);
        const ratingsData = {};
        ratingsSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data && data.ratingCount > 0) {
            ratingsData[doc.id] = {
              average: data.totalRating / data.ratingCount,
              count: data.ratingCount,
            };
          }
        });
        setRatings(ratingsData);
      } catch (e) {
        console.error("Could not fetch ratings from Firebase. Displaying static ratings.", e);
      }
    };
    fetchRatings();
  }, []);
  
  const apisWithRatings = useMemo(() => {
    return apis.map(api => ({
      ...api,
      rating: ratings[api.id]?.average || api.rating,
      ratingCount: ratings[api.id]?.count || 0,
    }));
  }, [apis, ratings]);

  useEffect(() => {
    let filtered = apisWithRatings;

    if (showOnlyBookmarked) {
      filtered = filtered.filter(api => bookmarkedApis.includes(api.id));
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(api => api.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(api => 
        api.name.toLowerCase().includes(lowercasedTerm) ||
        api.description.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    setFilteredApis(filtered);
  }, [apisWithRatings, selectedCategory, searchTerm, showOnlyBookmarked, bookmarkedApis]);

  useEffect(() => {
    localStorage.setItem('bookmarkedApis', JSON.stringify(bookmarkedApis));
  }, [bookmarkedApis]);
  
  const handleRateApi = async (apiId, newRating) => {
    const ratingRef = doc(db, "ratings", String(apiId));
    try {
      await setDoc(ratingRef, { 
          totalRating: increment(newRating),
          ratingCount: increment(1)
      }, { merge: true });

      setRatings(prevRatings => {
        const current = prevRatings[apiId] || { average: 0, count: 0 };
        const oldTotal = current.average * current.count;
        const newTotal = oldTotal + newRating;
        const newCount = current.count + 1;
        return {
          ...prevRatings,
          [apiId]: {
            average: newTotal / newCount,
            count: newCount
          }
        };
      });
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  const toggleBookmark = (apiId) => {
    setBookmarkedApis(prev => 
      prev.includes(apiId)
        ? prev.filter(id => id !== apiId)
        : [...prev, apiId]
    );
  };

  const toggleShowOnlyBookmarked = () => {
    const newShowBookmarks = !showOnlyBookmarked;
    setShowOnlyBookmarked(newShowBookmarks);
    if (newShowBookmarks) {
      setSelectedCategory('all');
    }
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setShowOnlyBookmarked(false);
  };

  const testAPI = async (api) => {
    setLoading(true);
    setError(null);
    setApiResponse(null);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(api.endpoint, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        setApiResponse(await response.json());
      } else {
        setApiResponse({ message: "Response is not JSON.", body: await response.text() });
      }
    } catch (err) {
      setError(err.name === 'AbortError' ? 'Request timed out after 10 seconds.' : (err.message || 'An unknown error occurred.'));
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (api) => setActiveModal(apisWithRatings.find(a => a.id === api.id));
  const handleCloseModal = () => {
    setActiveModal(null);
    setApiResponse(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
        categories={categories}
        onShowBookmarks={toggleShowOnlyBookmarked}
        showOnlyBookmarked={showOnlyBookmarked}
      />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-3">
            <span className="text-gray-600">
              Showing {filteredApis.length} of {apis.length} APIs
              {bookmarkedApis.length > 0 && (
                <span className="ml-2 text-yellow-600">• {bookmarkedApis.length} bookmarked</span>
              )}
            </span>
          </div>
        </div>
        <APIGrid
          apis={filteredApis}
          bookmarkedApis={bookmarkedApis}
          onToggleBookmark={toggleBookmark}
          onTryApi={handleOpenModal}
          onRateApi={handleRateApi}
          showOnlyBookmarked={showOnlyBookmarked}
        />
      </main>
      <Footer />
      {activeModal && (
        <Modal 
          api={activeModal} 
          onClose={handleCloseModal}
          onTestApi={testAPI}
          loading={loading}
          error={error}
          apiResponse={apiResponse}
        />
      )}
    </div>
  );
};

export default App;