import React from "react";
import "./App.css";

// import components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";

import Unsplash, { toJson } from "unsplash-js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

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

        json.results.map(image => {
          const { regular: original, thumbs: thumbnail } = image.urls;
          const { likes } = image;

          images.push({
            original,
            thumbnail,
            description: `Likes: ${likes}`
          });
        });

        console.log("images", json);

        this.setState({
          images
        });
      });
  };

  render() {
    return (
      <Router>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </Menu>
        <div className="App">
          <Header handleButton={this.handleButton} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/">
              <Main images={this.state.images} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
