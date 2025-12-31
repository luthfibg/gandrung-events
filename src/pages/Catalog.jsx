import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ProductSection from '../sections/ProductSection'

const Catalog = () => {
  const [activeSection, setActiveSection] = useState('led display')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    // Search logic will be handled in ProductSection
    console.log('Searching for:', searchQuery)
  }

  // Reset search when changing category
  useEffect(() => {
    setSearchQuery('')
  }, [activeSection])

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <main className="relative flex-1 p-4 lg:p-8 lg:me-64">
        <div className="w-full mx-auto max-w-7xl">
          {/* Header with Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold font-mulish capitalize text-gray-800">
                {activeSection.replace('-', ' ')} Catalog
              </h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk..."
                    className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Category Description */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <p className="text-gray-600">
                {activeSection === 'led display' && 'Rental LED Display berkualitas tinggi dengan berbagai ukuran pixel pitch untuk indoor dan outdoor events.'}
                {activeSection === 'tv' && 'TV besar untuk presentasi, konferensi, atau entertainment dengan resolusi 4K dan fitur smart TV.'}
                {activeSection === 'sound' && 'Sistem audio profesional untuk berbagai kebutuhan event dengan kualitas suara yang jernih.'}
                {activeSection === 'lighting' && 'Lighting equipment untuk panggung, wedding, dan event lainnya dengan berbagai efek.'}
            {!['led display', 'tv', 'sound', 'lighting'].includes(activeSection) && 'Temukan berbagai peralatan rental untuk kebutuhan event Anda.'}
              </p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Product Section */}
          {!isLoading && (
            <ProductSection 
              category={activeSection} 
              searchQuery={searchQuery}
              onLoadingChange={setIsLoading}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default Catalog