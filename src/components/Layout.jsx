import React from 'react'
import TopNav from './TopNav'

const Layout = ({ children }) => {
  return (
    <div className='app-container'>
        <TopNav/>
        <main className="app-content">
            {children}
        </main>

        <footer className="app-footer mt-8">
            <p>&copy; 2024 My Application</p>
        </footer>

        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>

    </div>
  )
}

export default Layout