// React imports
import React from "react";

// General imports
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function BurgerMenu() {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/search">Search</Link>
    </Menu>
  );
}

export default BurgerMenu;
