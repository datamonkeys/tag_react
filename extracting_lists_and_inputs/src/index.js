import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: false
    };
  }

  componentDidMount() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
      .then(response => response.json())
      .then(resp => {
        this.setState({
          quotes: resp
        });
      });
  }

  render() {
    return (
      <div>
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
