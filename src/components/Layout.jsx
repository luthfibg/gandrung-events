import React from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from './TopNav'

const Layout = ({ children }) => {
  const location = useLocation();
  const showTopNav = location.pathname !== '/catalog'
  return (
    <div className='app-container'>
        {/* Exclude catalog page from topnav */}
        {showTopNav && <TopNav/>}
        <main className="app-content">
            {children}
        </main>
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>

    </div>
  )
}

export default Layout