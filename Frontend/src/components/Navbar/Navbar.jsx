import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin, search, setSearch }) => {

  const [menu, setMenu] = useState("home")
  const [showSearch, setShowSearch] = useState(false)

  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/search")
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <Link
          to="/menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </Link>
        <Link
          to="/mobile-app"
          onClick={() => setMenu("mob-app")}
          className={menu === "mob-app" ? "active" : ""}
        >
          mobile app
        </Link>
        <Link
          to="/contact"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search">
          <img
            src={assets.search_icon}
            alt=""
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchEnter}
            />
          )}
        </div>
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        <button onClick={() => setShowLogin(true)}>
          sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar