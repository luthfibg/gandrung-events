import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Layout from './components/Layout.jsx'
import './index.css'

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWrapper/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        {/* <Route path='login' element={<Login/>}/> */}
      </Routes>
    </>
  )
}

export default App
