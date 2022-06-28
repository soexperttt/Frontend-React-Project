import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";



const NavBar = ({firstTime}) => {
  return (
    <>
    { !firstTime &&
      <nav className="navbar fixed-top ">
        <div className="container">
          <div className="left">
          <NavLink className="navbar-brand" to="/home">
            Home
          </NavLink></div>
          <NavLink className="navbar-brand" to="/about">
            About
          </NavLink>
          <div className="right">

          <NavLink className="navbar-brand" to="/contact">
            Contact
          </NavLink>
        </div></div>
      </nav>
}
    </>
  );
};

export default NavBar;
