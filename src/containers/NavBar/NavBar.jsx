import React from "react";
import "./NavBar.scss"
const NavBar = ({resetButton}) => {
  return (
    <div className="nav-bar">
      <h1>My Todos</h1>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default NavBar;
