import React from 'react';
import { ExternalLink, ShoppingCart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  // Format price function
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('Rp', 'Rp ');
  };

  // Determine category display name
  const getCategoryDisplay = (type) => {
    const categoryMap = {
      'led display': 'LED Videotron',
      'tv': 'TV & Monitor',
      'sound': 'Sound System',
      'lighting': 'Lighting Equipment',
      'stage': 'Stage Equipment',
      'power': 'Power Supply',
      'accessories': 'Accessories'
    };
    return categoryMap[type?.toLowerCase()] || type || 'Equipment';
  };

  // Determine badge color based on type
  const getBadgeColor = (type) => {
    const colorMap = {
      'led display': 'bg-blue-600',
      'tv': 'bg-purple-600',
      'sound': 'bg-green-600',
      'lighting': 'bg-yellow-600',
      'stage': 'bg-red-600',
      'power': 'bg-gray-600',
      'accessories': 'bg-indigo-600'
    };
    return colorMap[type?.toLowerCase()] || 'bg-blue-600';
  };

  // Get placeholder image based on category
  const getPlaceholderImage = (type) => {
    const imageMap = {
      'led display': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=560&q=80',
      'tv': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=560&q=80',
      'sound': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=560&q=80',
      'lighting': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=560&q=80'
    };
    return imageMap[type?.toLowerCase()] || 'https://images.unsplash.com/photo-1680868543815-b8666dba60f7?auto=format&fit=crop&w=560&q=80';
  };

  const product = data || {};
  const categoryDisplay = getCategoryDisplay(product.type);
  const badgeColor = getBadgeColor(product.type);
  const placeholderImage = getPlaceholderImage(product.type);

  return (
    <div className="group relative flex flex-col font-mulish bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Image Section with Overlay */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
          src={product.image || placeholderImage} 
          alt={product.title}
          onError={(e) => {
            e.target.src = placeholderImage;
            e.target.onerror = null;
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Top Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-blue-600 hover:bg-white shadow-sm transition-colors"
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
          <button 
            className="p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-green-600 hover:bg-white shadow-sm transition-colors"
            title="Quick Info"
          >
            <Info size={20} />
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${badgeColor} text-white rounded-full shadow-lg`}>
            {categoryDisplay}
          </span>
        </div>

        {/* Availability Status */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
            Available
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        {/* Product Title */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight line-clamp-1">
            {product.title || "Studio Master Pro"}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {product.type || "Professional Equipment"}
          </p>
        </div>
        
        {/* Specifications */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Spesifikasi:</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.specifications || "High-quality professional equipment with premium features"}
          </p>
        </div>

        {/* Pricing Info */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                Sewa Per Hari
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                  {product.rent ? formatPrice(product.rent) : "Rp 100.000"}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">/panel</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Minimum rental: 1 hari
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <Link 
                to={`/products/${product.id}`}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors group/btn"
              >
                Detail & Sewa
                <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
              
              <button 
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-center transition-colors"
                onClick={() => {/* Add quick inquiry logic */}}
              >
                Tanya dulu
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="text-xs p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
            <svg className="w-4 h-4 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Delivery 1-2 days</span>
          </div>
          <div className="text-xs p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
            <svg className="w-4 h-4 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free Setup</span>
          </div>
          <div className="text-xs p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
            <svg className="w-4 h-4 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Expert Support</span>
          </div>
        </div>
      </div>

      {/* Quick View Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
        <div className="text-center p-4">
          <h4 className="text-white text-lg font-bold mb-2">Quick View</h4>
          <div className="space-y-2">
            <Link 
              to={`/products/${product.id}`}
              className="block bg-white text-gray-900 hover:bg-blue-50 py-2 px-4 rounded-lg font-medium transition-colors"
            >
              View Full Details
            </Link>
            <button className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              Instant Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;