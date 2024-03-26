import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Cesta from './pages/Cesta'
import Login from './pages/Login'
import { useState } from 'react'
import Product from './pages/Product'
import Error from './pages/Errors/Error'
import NotFound from './pages/Errors/NotFound'
import IsUser from './components/IsUser'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<IsUser><Cesta /></IsUser>} />
        <Route path='/product/:id' element={<IsUser><Product /></IsUser>} />
        <Route path='/error' element={<Error />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
