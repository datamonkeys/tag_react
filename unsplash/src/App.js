import React from "react";
import "./App.css";

// import components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "3034944aa771efedc391c99f033dba1b2b060cb3d8e7633b8dd61d4901ce154d"
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false
    };
  }

  handleButton = searchInputValue => {
    unsplash.search
      .photos(searchInputValue, 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        const images = [];

        json.results.map(image =>
          images.push({
            original: image.urls.regular,
            thumbnail: image.urls.thumb
          })
        );

        console.log("images", images);

        this.setState({
          images
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header handleButton={this.handleButton} />
        <Main images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
