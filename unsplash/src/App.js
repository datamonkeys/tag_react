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
      image: false
    };
  }

  handleButton = value => {
    unsplash.search
      .photos(value, 1, 10, { orientation: "portrait" })
      .then(toJson)
      .then(json => {
        this.setState({
          image: {
            regular: json.results[0].urls.regular,
            alt: json.results[0].alt_description
          }
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header handleButton={this.handleButton} />
        <Main image={this.state.image} />
        <Footer />
      </div>
    );
  }
}

export default App;
