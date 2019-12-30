// React imports
import React from "react";

// General imports
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "./App.css";

// Import config components
import Routes from "./configs/Routes";

// Import components
import BurgerMenu from "./components/BurgerMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // <Router> is mandatory to make it work and will be used by the <Routes> component to load the pages.
  // the links are defined inside the <BurgerMenu> component.
  // a basic example can be found on the src/examples/Router.js file.
  return (
    <Router>
      <BurgerMenu />
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
