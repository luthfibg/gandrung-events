import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import ProductSection from '../sections/ProductSection'
import { useFadeInOnScroll, useTextReveal } from '../hooks/useGSAP.js'

const Catalog = () => {
  const [activeSection, setActiveSection] = useState('led display')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Refs for animations
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);

  // Apply animations
  useFadeInOnScroll(headerRef, { y: 50, delay: 0.2 });
  useTextReveal(titleRef, { delay: 0.3 });
  useFadeInOnScroll(descriptionRef, { y: 30, delay: 0.4 });
  useFadeInOnScroll(contentRef, { y: 30, delay: 0.5 });

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    // Search logic will be handled in ProductSection
    console.log('Searching for:', searchQuery)
  }

  // Reset search when changing category
  useEffect(() => {
    setSearchQuery('');
  }, [activeSection]);

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main ref={contentRef} className="relative flex-1 p-4 lg:p-8 lg:me-64">
        <div className="w-full mx-auto max-w-7xl">
          {/* Header with Search */}
          <div ref={headerRef} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h1 ref={titleRef} className="text-4xl lg:text-5xl font-bold font-mulish capitalize bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {activeSection.replace('-', ' ')} Catalog
              </h1>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="w-full md:w-auto">
                <div className="relative group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk..."
                    className="w-full md:w-80 px-6 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Category Description */}
            <div ref={descriptionRef} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">
                      {activeSection === 'led display' && '📺'}
                      {activeSection === 'tv' && '🖥️'}
                      {activeSection === 'sound' && '🔊'}
                      {activeSection === 'lighting' && '💡'}
                      {!['led display', 'tv', 'sound', 'lighting'].includes(activeSection) && '🎪'}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {activeSection === 'led display' && 'Rental LED Display berkualitas tinggi dengan berbagai ukuran pixel pitch untuk indoor dan outdoor events. Teknologi terdepan untuk visual yang memukau.'}
                    {activeSection === 'tv' && 'TV besar untuk presentasi, konferensi, atau entertainment dengan resolusi 4K dan fitur smart TV. Cocok untuk berbagai kebutuhan display.'}
                    {activeSection === 'sound' && 'Sistem audio profesional untuk berbagai kebutuhan event dengan kualitas suara yang jernih dan powerful. Dari small talk hingga concert scale.'}
                    {activeSection === 'lighting' && 'Lighting equipment untuk panggung, wedding, dan event lainnya dengan berbagai efek cahaya yang dramatis dan menawan.'}
                    {!['led display', 'tv', 'sound', 'lighting'].includes(activeSection) && 'Temukan berbagai peralatan rental untuk kebutuhan event Anda. Kami siap membantu mewujudkan acara impian Anda.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
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
