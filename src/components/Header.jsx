import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    color: "white",
  };
  return (
    <header>
      <h1>Portfolio</h1>
      <nav style={navStyle} className="myNavStyle">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
