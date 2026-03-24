import React, { useContext, useEffect, useRef } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
import { food_list as assetFoods } from '../../assets/assets'

const FoodDisplay = ({ category, search = "", showAssets = false }) => {

  const { food_list } = useContext(StoreContext)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (category !== "All" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [category])

  const allFoods = (showAssets || category !== "All") ? [...food_list, ...assetFoods] : food_list

  const uniqueFoods = Array.from(new Map(allFoods.map(item => [item.name, item])).values())

  const filteredFoods = uniqueFoods.filter((item) => {
    if (!item || !item.name) return false
    const matchesCategory = category === "All" || category === item.category
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='food-display' id='food-display' ref={sectionRef} style={{ minHeight: '70vh' }}>
      
      {!search && <h2>{category === "All" ? "Top dishes near you" : `${category} Dishes`}</h2>}

      <div className='food-display-list'>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item, index) => {
            let imageUrl = item.image
            
            if (typeof imageUrl === 'string' && !imageUrl.startsWith('http') && !imageUrl.startsWith('static') && !imageUrl.startsWith('/src')) {
              imageUrl = `http://localhost:4000/images/${item.image}`
            }

            return (
              <FoodItem
                key={item._id || index}
                id={item._id || index}
                name={item.name}
                desc={item.description || item.desc || "Tasty dish"}
                price={item.price}
                image={imageUrl}
              />
            )
          })
        ) : (
          <div className="no-results">No dishes available in this category.</div>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay