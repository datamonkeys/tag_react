import React from "react";
import "./index.css";

function Main(props) {
  return (
    <main className="App-main">
      <img src={props.image.regular} alt={props.image.alt} />
    </main>
  );
}

export default Main;
