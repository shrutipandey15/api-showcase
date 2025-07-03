import React from 'react';
import { Zap, Code, X, AlertCircle, CheckCircle } from 'lucide-react';

const Modal = ({ api, onClose, onTestApi, loading, error, apiResponse }) => {
  if (!api) return null;

  return (
    <div 
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col animate-scale-in shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-12 translate-y-12"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="flex-1 pr-4">
              <h2 className="text-3xl font-bold mb-3">{api.name}</h2>
              <p className="text-purple-100 text-lg leading-relaxed">{api.description}</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="p-8 overflow-y-auto flex-1">
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Code size={20} className="text-purple-600" />
              API Endpoint
            </label>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border-2 border-gray-100 font-mono text-base break-all shadow-inner">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                {api.method}
              </span>
              <span className="text-gray-700">{api.endpoint}</span>
            </div>
          </div>
          
          <button
            onClick={() => onTestApi(api)}
            disabled={loading}
            className="btn-success w-full mb-8 py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white spinner-glow"></div>
                <span>Testing API...</span>
              </>
            ) : (
              <>
                <Zap size={22} />
                <span>Test API Call</span>
              </>
            )}
          </button>
          
          {error && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl animate-slide-up">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-red-800 text-lg mb-2">Request Failed</h4>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          {apiResponse && (
            <div className="mb-8 animate-slide-up">
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-500" size={20} />
                Live Response
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-bold ml-2 animate-pulse">
                  LIVE
                </span>
              </label>
              <pre className="code-block overflow-x-auto text-sm max-h-80 shadow-2xl">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
          
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Code className="text-blue-600" size={20} />
              Sample Response
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold ml-2">
                EXAMPLE
              </span>
            </label>
            <pre className="code-block-light overflow-x-auto text-sm max-h-80 shadow-lg">
              {JSON.stringify(api.sampleResponse, null, 2)}
            </pre>
          </div>
        </div>
        
        <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"></div>
      </div>
    </div>
  );
};

export default Modal;
