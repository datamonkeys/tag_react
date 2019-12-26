import React from "react";
import "./index.css";
import ImageGallery from "react-image-gallery";

function Main(props) {
  return (
    <main className="App-main">
      {props.images ? <ImageGallery items={props.images} /> : "Loading..."}
    </main>
  );
}

export default Main;
