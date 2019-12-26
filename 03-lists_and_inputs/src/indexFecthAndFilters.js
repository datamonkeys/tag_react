import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.quotes = [];
    this.state = {
      quotes: false,
      indexQuotes: 0,
      searchInput: ""
    };
  }

  componentDidMount = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
      .then(response => response.json())
      .then(resp => {
        this.quotes = resp;
      });
  };

  handleRandomButton = () => {
    const quotes = this.quotes;
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    this.setState({
      quotes: [randomQuote]
    });
  };

  handleShowMeFiveButton = () => {
    const indexQuotes = this.state.indexQuotes;
    const slicedArray = this.quotes.slice(indexQuotes, indexQuotes + 5);

    this.setState({
      quotes: slicedArray,
      indexQuotes: indexQuotes + 5
    });
  };

  handleOnChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  handleSearchButton = () => {
    const quotes = this.quotes;
    const searchInput = this.state.searchInput.toLowerCase();
    const filtered = quotes.filter(quote =>
      quote.author.toLowerCase().includes(searchInput)
    );

    this.setState({
      quotes: filtered
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomButton}>Click</button>
        <button onClick={this.handleShowMeFiveButton}>Show me 5</button>
        <input type="text" onChange={this.handleOnChange} />
        <button onClick={this.handleSearchButton}>Search</button>
        {this.state.quotes && <ListContainer quotes={this.state.quotes} />}
      </div>
    );
  }
}

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

const ListContainer = props => {
  return <Lists quotes={props.quotes} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
