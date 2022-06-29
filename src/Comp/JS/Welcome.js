import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import App from "../..//App";
import "../css/App.css";
const Welcome = ({ setFirstTime }) => {
  const navigate = useNavigate();

  const btnRecipe = () => {
    setFirstTime(false);
    console.log(setFirstTime);
    navigate("/recipe");
  };
  const btnFood = () => {
    setFirstTime(false);
    console.log(setFirstTime);
    navigate("/food");
  };
  return (
    <div className="welcome">
      <h1 className="welcome-h1">Welcome to the best Food & Recipe API</h1>
      <p>
        Where you can Learn about food and the best and most delicious recipe
        for your favorite meal, drink , desert and more
      </p>
      <button type="button" className="btn btn-success w-50" onClick={btnFood}>
        Food
      </button>
      <button
        type="button"
        className="btn btn-success w-50"
        onClick={btnRecipe}
      >
        Recipe
      </button>
    </div>
  );
};

export default Welcome;
