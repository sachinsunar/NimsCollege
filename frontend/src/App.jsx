import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import { Route, Routes, useLocation } from 'react-router';
import AboutPage from './pages/AboutPage.jsx';
import ProgramPage from './pages/ProgramPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Admission from './pages/Admission.jsx';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/program' element={<ProgramPage />} />
        <Route path='/newsandnotice' element={<BlogPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
