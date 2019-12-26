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
