import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#FAF7F7" };
  const currentStyle = { color: "#090501" };
  return (
    <nav className="navbar navbar-dark bg-primary w-100 p-3">
      <NavLink to="/" style={currentStyle} activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/add" style={currentStyle} activeStyle={activeStyle}>
        Add
      </NavLink>
      {" | "}
      <NavLink to="/about" style={currentStyle} activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/get" style={currentStyle} activeStyle={activeStyle}>
        See Books
      </NavLink>
    </nav>
  );
};

export default Header;
