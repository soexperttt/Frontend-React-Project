import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import App from "../..//App";
import "../css/Welcome.css";
import vidd from "./vid_1.mp4";
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
  const btnAbout = () => {
    setFirstTime(false);
    console.log(setFirstTime);
    navigate("/about");
  };
  return (
    <>
      <div className="welcome">
        <video autoPlay muted loop>
          <source src={vidd} type="video/mp4" />
        </video>
        <div className="blurBG">
          <h1 className="welcome-h1">Welcome to the best Food & Recipe API</h1>
          <p className="welcome-p">
            Where to Learn about food and most delicious recipe for your
            favorite <span className="p-span">meal, drink , desert </span>and
            more
          </p>
          <div className="btns">
            <button
              type="button"
              className="button-64"
              onClick={btnFood}
              role="button"
            >
              <span className="text">Food</span>
            </button>
            <button
              type="button"
              className="button-64"
              onClick={btnRecipe}
              role="button"
            >
              <span className="text">Recipe</span>
            </button>{" "}
            <button
              type="button"
              className="button-64"
              onClick={btnAbout}
              role="button"
            >
              <span className="text">About & Contact</span>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
