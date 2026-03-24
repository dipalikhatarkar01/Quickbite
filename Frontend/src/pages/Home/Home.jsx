import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <FoodDisplay category={category} title="Top dishes near you" />
    </div>
  )
}

export default Home