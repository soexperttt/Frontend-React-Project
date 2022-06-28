import "../css/Home.css";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import RecipeList from "./RecipeList";
const Home = ({ingredients}) => {
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

      <select className="form-select form-select-lg">
        <option defaultValue>Type...</option>

        <option onClick={() => SetOptions("vegan")}>Vegan</option>
        <option onClick={() => SetOptions("vegetarian")}>Vegetarian</option>
        <option onClick={() => SetOptions("wheat-free")}>Wheat-Free</option>
        <option onClick={() => SetOptions("celery-free")}>Celery-Free</option>
        <option onClick={() => SetOptions("dairy-free")}>Dairy-Free</option>
        <option onClick={() => SetOptions("DASH")}>DASH</option>
        <option onClick={() => SetOptions("egg-free")}>Egg-Free</option>
        <option onClick={() => SetOptions("fish-free")}>Fish-Free</option>
        <option onClick={() => SetOptions("gluten-free")}>Gluten-Free</option>
        <option onClick={() => SetOptions("keto-friendly")}>
          Keto Friendly
        </option>
        <option onClick={() => SetOptions("low-sugar")}>Low Sugar</option>
        <option onClick={() => SetOptions("Mediterranean")}>
          Mediterranean
        </option>
        <option onClick={() => SetOptions("mustard-free")}>Mustard-Free</option>
        <option onClick={() => SetOptions("no-oil-added")}>No Oil-added</option>
        <option onClick={() => SetOptions("peanut-free")}>Peanut-Free</option>
        <option onClick={() => SetOptions("red-meat-free")}>
          Red Meat-Free
        </option>
        <option onClick={() => SetOptions("sesame-free")}>Sesame-Free</option>
        <option onClick={() => SetOptions("soy-free")}>Soy-Free</option>
        <option onClick={() => SetOptions("tree-nut-free")}>
          Tree nut-Free
        </option>
      </select>

      <p>{search}</p>
      <div className="RecipesList">
        {showRecipes.map((recipe) => {
          return <RecipeList recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Home;
