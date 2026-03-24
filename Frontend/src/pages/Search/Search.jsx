import React from "react"
import { useParams } from "react-router-dom"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import "./Search.css"

const Search = ({ search }) => {

  const { category } = useParams()

  const categoryToDisplay = category || "All"
  const searchQuery = search || ""

  return (
    <div className="search-page">
      <h2>Search Results</h2>
      <div className="search-results-container">
        <FoodDisplay
          category={categoryToDisplay}
          search={searchQuery}
          showAssets={true}
        />
      </div>
    </div>
  )
}

export default Search