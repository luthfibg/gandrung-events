import React from 'react'

const ProductCard = ({ data }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-700">
      {/* Image Container */}
      <div className="aspect-video relative rounded-t-xl overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?auto=format&fit=crop&w=560&q=80" 
          alt={data?.title || "Product"}
        />
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {data?.title || "Product Name"}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
          High quality equipment for your professional event needs.
        </p>
        <div className="mt-4 flex justify-between items-center">
           <span className="text-blue-600 font-semibold text-sm">Rental Available</span>
           <button className="py-2 px-3 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
             Details
           </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard