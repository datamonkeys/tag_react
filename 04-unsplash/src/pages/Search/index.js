// React imports
import React from "react";
import "./index.css";
import ImageGallery from "react-image-gallery";

// General imports
import Unsplash, { toJson } from "unsplash-js";

// General definitions
const unsplash = new Unsplash({
  accessKey: "3034944aa771efedc391c99f033dba1b2b060cb3d8e7633b8dd61d4901ce154d"
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false,
      searchInput: ""
    };
  }

  // get the input value and add it to state.
  handleSearch = e => {
    this.setState({
      searchInput: e.target.value.trim()
    });
  };

  // handle the input search
  // get data from searchInput state and use it to fire a request to get the images.
  handleButton = searchInputValue => {
    if (searchInputValue != "") {
      // A server-side Javascript wrapper for working with the Unsplash API.
      // documentation https://github.com/unsplash/unsplash-js
      unsplash.search
        .photos(searchInputValue, 1, 10, { orientation: "landscape" })
        .then(toJson)
        .then(data => {
          const images = [];

          // handle the result and create the array with images.
          data.results.map(image => {
            images.push({
              original: image.urls.regular,
              thumbnail: image.urls.thumb,
              description: `Likes: ${image.likes}`
            });
          });

          this.setState({
            images
          });
        });
    }
  };

  render() {
    return (
      <main className="App-search">
        <div>
          <h1>Search</h1>
          <input
            type="text"
            onChange={this.handleSearch}
            placeholder="Search..."
            value={this.state.searchInput}
          />
          <button onClick={() => this.handleButton(this.state.searchInput)}>
            Click
          </button>
        </div>
        {this.state.images ? <ImageGallery items={this.state.images} /> : null}
      </main>
    );
  }
}

export default Search;
