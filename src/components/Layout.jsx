import React from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from './TopNav'

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Define routes where TopNav should be hidden
  const noTopNavRoutes = ['/catalog', '/products/', '/admin'];
  
  // Check if current path matches any excluded route
  const showTopNav = !noTopNavRoutes.some(route => 
    location.pathname.startsWith(route)
  );
  
  return (
    <div className='app-container'>
        {showTopNav && <TopNav/>}
        <main className="app-content">
            {children}
        </main>
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
    </div>
  )
}

export default Layout