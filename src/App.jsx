import React, { useState, useEffect, useMemo } from 'react';
import { apis as apiData } from './data/apiData';
import { categories } from './data/categories';
import Header from './components/Header';
import APIGrid from './components/APIGrid';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { BarChart3, Users, Star, TrendingUp } from 'lucide-react';
import { db } from './firebase'; 
import { collection, getDocs, doc, setDoc, increment } from "firebase/firestore";

const App = () => {
  const [apis, setApis] = useState(apiData);
  const [ratings, setRatings] = useState({});
  const [filteredApis, setFilteredApis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [bookmarkedApis, setBookmarkedApis] = useState(() => {
    try {
      const savedBookmarks = localStorage.getItem('bookmarkedApis');
      return savedBookmarks ? JSON.parse(savedBookmarks) : [];
    } catch (error) {
      console.error("Could not parse bookmarks from localStorage", error);
      return [];
    }
  });

  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('bookmarkedApis', JSON.stringify(bookmarkedApis));
    } catch (error) {
      console.error("Could not save bookmarks to localStorage", error);
    }
  }, [bookmarkedApis]);

  useEffect(() => {
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

  const totalRatings = Object.values(ratings).reduce((sum, rating) => sum + rating.count, 0);
  const averageRating = totalRatings > 0 
    ? Object.values(ratings).reduce((sum, rating) => sum + (rating.average * rating.count), 0) / totalRatings 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
        categories={categories}
        onShowBookmarks={toggleShowOnlyBookmarked}
        showOnlyBookmarked={showOnlyBookmarked}
      />
      
      <main className="container-modern py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass rounded-2xl p-6 text-center shadow-lg border border-white/20 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <BarChart3 className="text-purple-600" size={32} />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{apis.length}</div>
            <div className="text-sm text-gray-600 font-medium">Total APIs</div>
          </div>
          
          <div className="glass rounded-2xl p-6 text-center shadow-lg border border-white/20 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Star className="text-yellow-500" size={32} />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{averageRating.toFixed(1)}</div>
            <div className="text-sm text-gray-600 font-medium">Avg Rating</div>
          </div>
          
          <div className="glass rounded-2xl p-6 text-center shadow-lg border border-white/20 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Users className="text-blue-600" size={32} />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{totalRatings}</div>
            <div className="text-sm text-gray-600 font-medium">Total Ratings</div>
          </div>
          
          <div className="glass rounded-2xl p-6 text-center shadow-lg border border-white/20 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <TrendingUp className="text-emerald-600" size={32} />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{bookmarkedApis.length}</div>
            <div className="text-sm text-gray-600 font-medium">Bookmarked</div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm px-8 py-4">
            <span className="text-gray-700 text-lg font-medium">
              Showing <span className="text-gradient font-bold text-xl">{filteredApis.length}</span> of{' '}
              <span className="text-gradient font-bold text-xl">{apis.length}</span> APIs
              {bookmarkedApis.length > 0 && (
                <span className="ml-4 text-yellow-600">
                  • <span className="font-bold">{bookmarkedApis.length}</span> bookmarked
                </span>
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
