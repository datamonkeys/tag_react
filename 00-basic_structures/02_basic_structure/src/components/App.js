import React from "react";
import "../assets/css/general_styles.css";
import Welcome from "./Welcome";

/* This is a simple example how to pass a string as props inside a component. */
function App() {
  return (
    <div>
      <Welcome name="Sarah" />
      <Welcome name="Linda" />
      <Welcome name="Maria" />
    </div>
  );
}

export default App;
