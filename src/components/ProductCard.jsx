import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react'; // Optional: Use any icon library

const ProductCard = ({ data }) => {
  return (
    <div className="group relative flex flex-col font-mulish bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Image Section with Overlay */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
          src={data?.image || "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?auto=format&fit=crop&w=560&q=80"} 
          alt={data?.title}
        />
        {/* Top Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-red-500 hover:bg-white shadow-sm transition-colors">
            <ShoppingCart size={24} />
          </button>
        </div>
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 text-[10px] backdrop-blur-md lg:text-lg font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full shadow-lg">
            LED Videotron
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
            {data?.title || "Studio Master Pro"}
          </h3>
        </div>
        
        {/* Footer info */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-neutral-800">
          <div>
            <p className="text-[10px] lg:text-lg text-gray-400 font-bold">Sewa Perhari-Permodul</p>
            <p className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Rp 100.000</p>
          </div>
          
          <button className="inline-flex items-center gap-2 py-2.5 px-4 bg-gray-900 dark:bg-white dark:text-black text-white text-sm font-semibold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors group/btn">
            View Details
            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>      </div>
    </div>
  );
};

export default ProductCard;