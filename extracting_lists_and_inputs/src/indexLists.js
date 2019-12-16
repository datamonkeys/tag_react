import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const CustomButton = props => {
  return <button onClick={props.click}>{props.text}</button>;
};

const Header = props => {
  return (
    <header className="App-header">
      {props.text}
      <br />
      Counter: {props.counter}
      <br />
      <CustomButton click={props.click} text={"header"} type={"header"} />
    </header>
  );
};

const Main = props => {
  return (
    <main className="App-main">
      <div className="App-sidebar">
        {props.texts.sidebar}
        <br />
        Counter: {props.counter}
        <br />
        <CustomButton click={props.click} text={"sidebar"} type={"sidebar"} />
      </div>
      <div className="App-content">
        {props.texts.content}
        <br />
        Counter: {props.counter}
        <br />
        <CustomButton click={props.click} text={"content"} type={"content"} />
      </div>
    </main>
  );
};

const Footer = props => {
  return (
    <footer className="App-footer">
      {props.texts.text} {props.texts.year}
      <br />
      Counter: {props.counter}
      <br />
      <CustomButton click={props.click} text={"sidebar"} type={"sidebar"} />
    </footer>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      componentTexts: {
        header: "Header",
        main: {
          sidebar: "sidebar",
          content: "Content"
        },
        footer: {
          text: "Footer",
          year: "2019"
        }
      }
    };
  }

  handleClick = type => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          text={this.state.componentTexts.header}
          click={this.handleClick}
          counter={this.state.counter}
        />
        <Main
          texts={this.state.componentTexts.main}
          click={this.handleClick}
          counter={this.state.counter}
        />
        <Footer
          texts={this.state.componentTexts.footer}
          click={this.handleClick}
          counter={this.state.counter}
        />
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

const ListContainer = () => {
  const quotes = [
    {
      _id: "5a9a9f7e2bad9600044b6fb6",
      sr: "",
      en: "AI is a fundamental risk to the existence of human civilization.",
      author: "Elon Musk",
      source: "",
      numberOfVotes: 2,
      rating: 4.8,
      addedBy: "5ab04d928c8b4e3cbf733557",
      id: "5a9a9f7e2bad9600044b6fb6"
    },
    {
      _id: "5a9aa21b2bad9600044b6fba",
      sr: "",
      en:
        "The main activity of programming is not the origination of new independent programs, but in the integration, modification, and explanation of existing ones.",
      author: "Terry Winograd",
      source: "",
      numberOfVotes: 1,
      rating: 3.5,
      addedBy: "5ab04d928c8b4e3cbf733557",
      id: "5a9aa21b2bad9600044b6fba"
    },
    {
      _id: "5a9aaff32bad9600044b6fbd",
      sr: "",
      en: "Cool URIs don't change.",
      author: "Tim Berners-Lee",
      source: "",
      numberOfVotes: 1,
      rating: 3.5,
      addedBy: "5ab04d928c8b4e3cbf733557",
      id: "5a9aaff32bad9600044b6fbd"
    },
    {
      _id: "5a9aaf8e2bad9600044b6fbc",
      sr: "",
      en:
        "I don't believe in the sort of eureka moment idea. I think it's a myth. I'm very suspicious that actually Archimedes had been thinking about that problem for a long time.",
      author: "Tim Berners-Lee",
      source: "",
      numberOfVotes: 4,
      rating: 3.7,
      addedBy: "5ab04d928c8b4e3cbf733557",
      id: "5a9aaf8e2bad9600044b6fbc"
    }
  ];
  return <Lists quotes={quotes} />;
};

ReactDOM.render(<ListContainer />, document.getElementById("root"));
