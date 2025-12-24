import React from 'react'
import { MonitorIcon, PresentationIcon, SpeakerIcon, Spotlight, Router, X } from 'lucide-react'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'led', label: 'LED Videotron', icon: <PresentationIcon size={20}/> },
    { id: 'tv', label: 'TV', icon: <MonitorIcon size={20}/> },
    { id: 'projector', label: 'Projector', icon: <PresentationIcon size={20}/> },
    { id: 'sound', label: 'Sound System', icon: <SpeakerIcon size={20}/> },
    { id: 'lighting', label: 'Lighting', icon: <Spotlight size={20}/> },
    { id: 'digital-promo', label: 'Digital Promo', icon: <Router size={20}/> },
  ]

  return (
    <>
      {/* Mobile Toggle (Tetap di kiri atau tengah biasanya) */}
      <div className="lg:hidden p-4 border-b bg-white flex justify-between items-center">
        <span className="font-bold">Gandrung Events</span>
        <button 
          className="p-2 bg-gray-800 text-white rounded-lg"
          data-hs-overlay="#hs-sidebar-footer"
        >
          Menu
        </button>
      </div>

      <div 
        id="hs-sidebar-footer" 
        className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:start-auto lg:end-0 w-64
        hs-overlay-open:translate-x-0 -translate-x-full lg:translate-x-0 transition-all duration-300 transform
        h-full hidden fixed top-0 end-0 bottom-0 z-60 bg-white border-s border-gray-200"
      >
        <div className="relative flex flex-col h-full">
          <header className="p-6 flex justify-between items-center">
            <a className="font-bold text-xl text-black">Gandrung Events</a>
            <button className="lg:hidden" data-hs-overlay="#hs-sidebar-footer">
              <X size={20}/>
            </button>
          </header>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-x-3.5 py-2.5 px-3 text-sm rounded-lg transition-colors
                      ${activeSection === item.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-800 hover:bg-gray-100'}`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <footer className="p-4 border-t border-gray-200 text-xs text-gray-400 text-center">
            &copy; 2025 Gandrung Events
          </footer>
        </div>
      </div>
    </>
  )
}

export default Sidebar