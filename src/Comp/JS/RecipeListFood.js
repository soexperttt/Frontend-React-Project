import "../css/RecipeList.css";
import React from "react";

const RecipeListFood = ({ recipe }) => {
  const [open, setOpen] = React.useState(false);



  return (
    <>
      <div className="recipeList-main">
        <div className="content">
          <img
            className="recipeList-image"
            src={recipe["food"]["image"]}
            alt={recipe["food"]["label"]}
          />

          <p className="recipeList-p">{recipe["food"]["label"]}</p>
          <p className="recipeList-p">
            meal Type: {recipe["food"]["category"]}
          </p>
          <p className="recipeList-p">
            calories: {recipe["food"]["categoryLabel"]}
          </p>
          <p className="recipeList-p">dishType: {recipe["food"]["foodId"]}</p>
        </div>
      </div>
    </>
  );
};

export default RecipeListFood;
