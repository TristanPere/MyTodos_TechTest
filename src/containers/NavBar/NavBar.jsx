import React from "react";
import "./NavBar.scss"
const NavBar = ({resetButton}) => {
  return (
    <div className="nav-bar">
      <h1>My Todos</h1>
      <button  className="nav-bar__button" onClick={resetButton}>Reset</button>
    </div>
  );
};

export default NavBar;
