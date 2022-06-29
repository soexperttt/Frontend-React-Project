import "../css/Food.css";
import React from "react";


const FoodList = ({ recipe }) => {
  
 

  return (
    <>
      <div className="recipeList-main-food">
        <div className="content-food">
        <div className="card">
          <img
            className="recipeList-image-food"
            src={recipe["food"]["image"]}
            alt={recipe["food"]["label"]}
          />

          <p className="recipeList-p-food">{recipe["food"]["label"]}</p>

          <p className="recipeList-p-food">category: {recipe["food"]["category"]}</p>
        </div>
      </div> </div>
    </>
  );
};

export default FoodList;
