import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Catalog from './pages/Catalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
// import AdminPage from './pages/AdminPage.jsx'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import './index.css'

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

async function loadPreline() {
  return import('preline/dist/index.js');
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWrapper/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='products/:id' element={<ProductDetail/>}/>
          {/* <Route path='admin' element={<AdminPage/>}/> */}
        </Route>
        {/* <Route path='login' element={<Login/>}/> */}
      </Routes>
    </>
  )
}

export default App