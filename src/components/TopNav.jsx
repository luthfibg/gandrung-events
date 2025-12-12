import React, { useState } from 'react'
import './topnav.css'

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="text-gray-800 fixed m-4 md:m-8 bg-white rounded-2xl z-20 top-0 start-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto">
        {/* Menu kiri - tampil di desktop, tersembunyi di mobile */}
        <div className="hidden md:flex lg:flex-1 flex-2 justify-start py-3 px-5" id="navbar-left-desktop">
          <ul className="flex flex-col justify-center p-4 md:p-0 font-medium border border-default rounded-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 bg-brand rounded-sm md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
            </li>
          </ul>
        </div>

        {/* Logo tengah - selalu tampil */}
        <div className="py-3 px-3 flex justify-center lg:flex-4 flex-2 w-full md:w-auto">
          <a href="#" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-gray-900 text-xl font-semibold whitespace-nowrap">Gandrung Event</span>
          </a>
        </div>

        {/* Menu kanan - tampil di desktop, tersembunyi di mobile */}
        <div className="hidden md:flex justify-end py-3 px-5 lg:flex-1 flex-2" id="navbar-right-desktop">
          <ul className="flex flex-col justify-center p-4 md:p-0 font-medium border border-default rounded-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger button untuk mobile */}
        <div className="md:hidden flex items-center px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-700 rounded-lg hover:bg-neutral-tertiary focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-mobile"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown - hanya tampil di mobile saat hamburger diklik */}
      {isMenuOpen && (
        <div className="md:hidden" id="navbar-mobile">
          <div className="flex flex-col p-4 border-t border-default mt-2">
            {/* Bagian kiri mobile */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Menu</h3>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 bg-brand rounded-sm" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary">About</a>
                </li>
              </ul>
            </div>
            
            {/* Bagian kanan mobile */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">More</h3>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-neutral-tertiary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default TopNav