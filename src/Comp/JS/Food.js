import "../css/Home.css";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import RecipeListFood from "./RecipeListFood";
const Food = ({ ingredients }) => {
  const [recipes, setRecipe] = useState("");
  const [showRecipes, setShowRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const apiKey = "a898bc94c845b0e4e9f0f065a1783f0b";
  const apiId = "a08aed4c";
  const url = `  https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${recipes}`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setShowRecipes(result.data.hints);
    console.log(result.data);
  };

  const onClick = (e) => {
    e.preventDefault();
    getRecipes();
    console.log("You searched for: " + recipes);
    setSearch("Result of your search for: " + recipes);
  };

  return (
    <div className="home">
      <h1 className="head">Food Recipe </h1>
      <input
        type="text"
        className="search-input"
        placeholder="Recipe... chicken, rice, etc"
        value={recipes}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button type="button" onClick={onClick} className="searchBtn">
        SEARCH
      </button>

      <p>{search}</p>
      <div className="RecipesList">
        {showRecipes.map((recipe) => {
          return <RecipeListFood recipe={recipe} />;
        })}
      </div>
    </div>
  );
};
export default Food;
