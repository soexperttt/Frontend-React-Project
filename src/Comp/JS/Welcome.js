import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import App from "../..//App";
import "../css/App.css";
const Welcome = ({ setFirstTime }) => {
  const navigate = useNavigate();

  const btn = () => {
    setFirstTime(false);
    console.log(setFirstTime);
    navigate("/home");
  };
  return (
    <div className="welcome">
      <h1 className="welcome-h1">Welcome to the Recipe App</h1>
      <p>
        Where you can find the best and most delicious recipe for your favorite
        meal
      </p>
      <button type="button" className="btn btn-success w-50" onClick={btn}>
        Start
      </button>
    </div>
  );
};

export default Welcome;
