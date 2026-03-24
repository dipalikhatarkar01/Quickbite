import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {
  const [category, setCategory] = useState("All")

  return (
    <div style={{minHeight: '80vh'}}>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} title={`${category} Dishes`} />
    </div>
  )
}

export default Menu