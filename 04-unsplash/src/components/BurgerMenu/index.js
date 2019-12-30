// React imports
import React from "react";

// General imports
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// This is a perfect example how to combine two libraries
// one for the burger menu <Menu>
// and <Link> for the Router.

/* 
This code: to="/about", will redirect to <About> component, this is defined in src/configs/Routes.js

Like this:
<Route path="/about">
  <About />
</Route>
*/

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
