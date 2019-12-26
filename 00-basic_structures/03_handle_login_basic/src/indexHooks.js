import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const DisplayText = props => {
  return <h1>{props.text}</h1>;
};

const Toggle = () => {
  // Declare a new state variable, which we'll call "isToggleOn"
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `status ${isToggleOn}`;
  });

  return (
    <div className="wrapper">
      <button type="button" onClick={() => setIsToggleOn(!isToggleOn)}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
      {isToggleOn ? <DisplayText text="Text" /> : null}
    </div>
  );
};

ReactDOM.render(<Toggle />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
