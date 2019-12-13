import React from "react";
import "./Assets/css/general_styles.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
