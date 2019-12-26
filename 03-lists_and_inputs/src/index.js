import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayQuotes: false,
      index: 0,
      searchInput: ""
    };
    this.quotes = [];
  }

  componentDidMount() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
      .then(response => response.json())
      .then(resp => {
        this.quotes = resp;
        // console.log(this.quotes);
      });
  }

  handleRandomButton = () => {
    const randomNumber = Math.floor(Math.random() * this.quotes.length);
    const randomQuote = this.quotes[randomNumber];
    this.setState({
      displayQuotes: [randomQuote]
    });
  };

  handleGiveMeFive = () => {
    const index = this.state.index;
    const slicedArray = this.quotes.slice(index, index + 5);
    this.setState({
      displayQuotes: slicedArray,
      index: index + 5
    });
  };

  handleOnChange = event => {
    this.setState(
      {
        searchInput: event.target.value
      },
      () => {
        this.handleSearchButton();
      }
    );
  };

  handleSearchButton = () => {
    const filtered = this.quotes.filter(quote =>
      quote.author
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase().trim())
    );

    this.setState({
      displayQuotes: filtered
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomButton}>Random</button>
        <button onClick={this.handleGiveMeFive}>Show me 5</button>
        <input type="text" onChange={this.handleOnChange} />
        <button onClick={this.handleSearchButton}>Search</button>

        {this.state.displayQuotes && (
          <ListContainer quotes={this.state.displayQuotes} />
        )}
      </div>
    );
  }
}

const ListContainer = props => {
  console.log(props);
  return <Lists quotes={props.quotes} />;
};

const Lists = props => {
  const quotes = props.quotes;

  const listItems = quotes.map(quote => (
    <ListItem key={quote.id} author={quote.author} quote={quote.en} />
  ));
  return <ul>{listItems}</ul>;
};

const ListItem = props => {
  const { quote, author } = props;
  return (
    <li>
      <span>{quote}</span>
      <span>
        {""} - <strong>{author}</strong>
      </span>
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
