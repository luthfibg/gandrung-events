import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ProductSection from '../sections/ProductSection'

const Catalog = () => {
  // State untuk melacak section yang aktif
  const [activeSection, setActiveSection] = useState('led')

  return (
    // flex-row-reverse membuat sidebar pindah ke kanan di layar besar
    <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-gray-50">
      
      {/* Sidebar - Menerima state dan fungsi pengubah state, posisi right side */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <main className="relative flex-1 p-4 lg:p-8 lg:me-64">
        <div className="w-full mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold font-mulish capitalize text-gray-800">
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