import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Cesta from './pages/Cesta'
import Login from './pages/Login'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState(null)

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <>
      <Navbar logout={logout} />
      <Banner user={user} />
      <Login setUser={setUser} />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cesta' element={<Cesta />} />
      </Routes> */}
      <Home />
      <Cesta />
      <Footer />
    </>
  )
}

export default App
