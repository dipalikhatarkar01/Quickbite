import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate()

  const handleClick = (menuName) => {
    setCategory(menuName)
    navigate(`/category/${menuName}`)
  }

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() => handleClick(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu