import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ProductSection from '../sections/ProductSection'

const Catalog = () => {
  // State untuk melacak section yang aktif
  const [activeSection, setActiveSection] = useState('led')

  return (
    // flex-row-reverse membuat sidebar pindah ke kanan di layar besar
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-gray-50">
      
      {/* Sidebar - Menerima state dan fungsi pengubah state */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold capitalize text-gray-800">
              {activeSection.replace('-', ' ')} Catalog
            </h1>
          </header>

          {/* Menampilkan section berdasarkan state */}
          <ProductSection category={activeSection} />
        </div>
      </main>
      
    </div>
  )
}

export default Catalog