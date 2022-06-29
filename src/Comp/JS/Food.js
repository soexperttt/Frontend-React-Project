import "../css/Food.css";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import FoodList from "./FoodList";
const Food = ({ nutrients }) => {
  const [recipes, setRecipe] = useState("");
  const [showRecipes, setShowRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const apiKey = "a898bc94c845b0e4e9f0f065a1783f0b";
  const apiId = "a08aed4c";
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${recipes}&from=0&to=200`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setShowRecipes(result.data.hints);
    console.log(result.data);
  };

  const onClick = (e) => {
    e.preventDefault();
    getRecipes();
    console.log("You searched for: " + recipes);
    setSearch("Result of ( " + recipes + " )");
  };

  return (
    <div className="container-food">
      <h1 className="head-food">Food database </h1>
      <div className="comp-food">
        <input
          type="text"
          className="search-input-food"
          placeholder="Food..."
          value={recipes}
          onChange={(e) => setRecipe(e.target.value)}
        />

        <button className="button-82-pushable" onClick={onClick} role="button">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">SEARCH</span>
        </button>
      </div>
      <p className="search-p-food">{search}</p>
      <div className="RecipesList-food">
        {showRecipes.map((recipe) => {
          return <FoodList recipe={recipe} />;
        })}
      </div>
    </div>
  );
};
export default Food;
