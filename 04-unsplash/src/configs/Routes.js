// React imports
import React from "react";

// General imports
import { Switch, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Search from "../pages/Search";

// Here we can define the routes for our app
// for example the route "/about" will call the About Component from the pages folder.
// the <Router> is mandatory to make it work, but in this case the <Router> is defined already in the App.js
// the links definition are inside the <BurgerMenu> component.

// documentation for the library: https://reacttraining.com/react-router/web/guides/quick-start
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
}

export default Routes;
