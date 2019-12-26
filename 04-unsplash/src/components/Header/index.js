import React from "react";
import "./index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearch = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  render() {
    return (
      <header className="App-header">
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="Search..."
          value={this.state.searchInput}
        />
        <button onClick={() => this.props.handleButton(this.state.searchInput)}>
          Click
        </button>
      </header>
    );
  }
}

export default Header;
