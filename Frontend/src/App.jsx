import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Search from "./pages/Search/Search"
import Menu from './pages/Menu/Menu'
import MobileApp from './pages/MobileApp/MobileApp'
import ContactUs from './pages/ContactUs/ContactUs'
import ChatBot from './components/ChatBot/ChatBot'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className='app'>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Navbar 
        setShowLogin={setShowLogin}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/mobile-app' element={<MobileApp />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/search' element={<Search search={search}/>} />
        <Route path='/category/:category' element={<Search search={search}/>} />
      </Routes>
      <Footer/>
    <ChatBot/>
    </div>
  )
}

export default App