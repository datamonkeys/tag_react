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

  handleSearch = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  handleButton = searchInputValue => {
    unsplash.search
      .photos(searchInputValue, 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        const images = [];

        json.results.map(image => {
          const { regular: original, thumb: thumbnail } = image.urls;
          const { likes } = image;

          images.push({
            original,
            thumbnail,
            description: `Likes: ${likes}`
          });
        });

        this.setState({
          images
        });
      });
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
