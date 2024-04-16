import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/Home'));
const Cesta = lazy(() => import('./pages/Cesta'));
const Login = lazy(() => import('./pages/Login'));
const Product = lazy(() => import('./pages/Product'));
const Error = lazy(() => import('./pages/Errors/Error'));
const NotFound = lazy(() => import('./pages/Errors/NotFound'));

import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import IsUser from "./components/IsUser"


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <AddProduct />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<IsUser><Cesta /></IsUser>} />
          <Route path='/product/:id' element={<IsUser><Product /></IsUser>} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
