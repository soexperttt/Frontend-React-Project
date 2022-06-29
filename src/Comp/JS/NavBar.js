import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";



const NavBar = ({firstTime}) => {
  return (
    <>
    { !firstTime &&
      <nav className="navbar fixed-top ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          home
          </NavLink>
          <NavLink className="navbar-brand" to="/about">
            About & Contact
          </NavLink>
      </div>
      </nav>
}
    </>
  );
};

export default NavBar;
