import "../css/Recipe.css";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import RecipeList from "./RecipeList";
const Home = ({ ingredients }) => {
  const [recipes, setRecipe] = useState("");
  const [showRecipes, setShowRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [options, SetOptions] = useState("vegan");
  const apiKey = "eb3108e21fa764dff8bf00f1dbe061c8";
  const apiId = "77744eed";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipes}&app_id=${apiId}&app_key=${apiKey}&health=${options}`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setShowRecipes(result.data.hits);
    console.log(result.data);
  };

  const onClick = (e) => {
    e.preventDefault();
    getRecipes();
    console.log("You searched for: " + recipes);
    setSearch("Result of ( " + recipes + " )");
  };

  return (
    <div className="container-recipe">
      <div className="topBG">
        <h1 className="head-recipe">Food & Grocery </h1>
        <div className="comp-recipe">
          <input
            type="text"
            className="search-input-recipe"
            placeholder="Recipe..."
            value={recipes}
            onChange={(e) => setRecipe(e.target.value)}
          />

          <button className="button-86" onClick={onClick} role="button">
            search
          </button>
        </div>
      </div>

      <p className="search-p-recipe">{search}</p>
      <div className="RecipesList-recipe">
        {showRecipes.map((recipe) => {
          return <RecipeList recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Home;
