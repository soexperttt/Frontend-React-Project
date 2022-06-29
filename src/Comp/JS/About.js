import React from "react";
import "../css/About.css";
const About = () => {
  return (
    <>
      <div className="about-containers">
        <p className="head">
          A very humble food & food recipe app <br />
          to ease the way of cooking your food{" "}
        </p>
      </div>
      <div className="s2">
        <h4>-Api used for recipes by-</h4>
        <p className="faisal">edamam</p>
        <h4>-app developed by-</h4>
        <p className="faisal">Faisal</p>
      </div>
      <div className="s3">
        <h1>
          if you have any issue or want to report a problem please contact me
          at:
        </h1>
        <h5>falshamrani.usa@gmail.com</h5>
      </div>
      
    </>
  );
};

export default About;
