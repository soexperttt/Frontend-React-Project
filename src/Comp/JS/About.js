import React from "react";
import { Link } from "react-router-dom";
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
          if you have any issue or want to report a problem please contact me at
        </h1>
        <div className="contact-container">
          <a href="https://github.com/soCURSED" target="_blank">
            <p className="github">github</p>
          </a>
          <p className="seprate">|</p>
          <a
            href="https://api.whatsapp.com/send?phone=966539399312"
            target="_blank"
          >
            <p className="whatsapp">whatsapp</p>
          </a>{" "}
          <p className="seprate">|</p>
          <a href="https://socursed.github.io/myPAGE/" target="_blank">
            <p className="portfolio">portfolio</p>
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default About;
