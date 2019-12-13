// Import General Libraries
import React from "react";

// Import components
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

// Import CSS
import "./styles.css";

function App() {

  const string = "Footer Component";

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer textString={string} />
    </div>
  );
}

export default App;
