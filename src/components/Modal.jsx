import React from 'react';
import { Zap, Code } from 'lucide-react';

const Modal = ({ api, onClose, onTestApi, loading, error, apiResponse }) => {
  if (!api) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{api.name}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2">{api.description}</p>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">API Endpoint</label>
            <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm break-all border">
              <span className="text-green-600 font-semibold">{api.method}</span> {api.endpoint}
            </div>
          </div>
          
          <button
            onClick={() => onTestApi(api)}
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Testing...
              </>
            ) : (
              <>
                <Zap size={18} />
                Test API Call
              </>
            )}
          </button>
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-1">Error</h4>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          
          {apiResponse && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"><Code size={16} /> Live Response</label>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm max-h-60">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"><Code size={16} /> Sample Response</label>
            <pre className="bg-gray-50 text-gray-800 p-4 rounded-lg overflow-x-auto text-sm border max-h-60">
              {JSON.stringify(api.sampleResponse, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;