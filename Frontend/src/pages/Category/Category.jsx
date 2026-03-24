import React from 'react'
import { useParams } from 'react-router-dom'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import './Categgory.css'

const Category = () => {
  const { category } = useParams()

  return (
    <div className='category-page'>
      <div className='category-header'>
        <h2>{category} Menu</h2>
      </div>
      <FoodDisplay category={category} showAssets={true} />
    </div>
  )
}

export default Category