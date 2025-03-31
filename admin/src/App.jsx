import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader.jsx'
import axios from 'axios'
import AddPhotos from './pages/AddPhotos.jsx'
import ListNews from './pages/ListNews.jsx'
import ListPhotos from './pages/ListPhotos.jsx'
import AddNews from './pages/AddNews.jsx'


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {



  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const requestInterceptor = axios.interceptors.request.use(
      function (config) {
        setLoading(true);
        return config;
      },
      function (error) {
        setLoading(false);
        return Promise.reject(error);
      }
    );


    const responseInterceptor = axios.interceptors.response.use(
      function (response) {
        setLoading(false);
        return response;
      },
      function (error) {
        setLoading(false);
        return Promise.reject(error);
      }
    );


    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])



  return (
    <div className='bg-gray-50 min-h-screen'>
      <Toaster />
      {token === '' ? <Login setToken={setToken} /> : <>
        <Navbar setToken={setToken} />
        <Loader show={loading} />
        <hr className='border-1 border-gray-300' />
        <div className='flex w-full'>
          <Sidebar />

          <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/addnews' element={<AddNews token={token} />} />
              <Route path='/addphotos' element={<AddPhotos token={token} />} />
              <Route path='/listnews' element={<ListNews token={token} />} />
              <Route path='/listphotos' element={<ListPhotos token={token} />} />
            </Routes>
          </div>
        </div>
      </>}

    </div>
  )
}

export default App