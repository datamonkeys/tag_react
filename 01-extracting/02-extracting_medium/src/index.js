import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const CustomButton = props => {
  return <button onClick={() => props.click(props.type)}>{props.text}</button>;
};

const Header = props => {
  return (
    <header className="App-header">
      {props.text}
      <br />
      Counter Header: {props.counter}
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
        Counter: {props.counterSidebar}
        <br />
        <CustomButton click={props.click} text={"sidebar"} type={"sidebar"} />
      </div>
      <div className="App-content">
        {props.texts.content}
        <br />
        Counter: {props.counterContent}
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
      <CustomButton click={props.click} text={"footer"} type={"footer"} />
    </footer>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterHeader: 0,
      counterContent: 0,
      counterSidebar: 0,
      counterFooter: 0,
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
    // eslint-disable-next-line default-case
    switch (type) {
      case "header":
        this.setState({
          counterHeader: this.state.counterHeader + 1
        });
        break;
      case "sidebar":
        this.setState({
          counterSidebar: this.state.counterSidebar + 1
        });
        break;
      case "content":
        this.setState({
          counterContent: this.state.counterContent + 1
        });
        break;
      case "footer":
        this.setState({
          counterFooter: this.state.counterFooter + 1
        });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          text={this.state.componentTexts.header}
          click={this.handleClick}
          counter={this.state.counterHeader}
        />
        <Main
          texts={this.state.componentTexts.main}
          click={this.handleClick}
          counterSidebar={this.state.counterSidebar}
          counterContent={this.state.counterContent}
        />
        <Footer
          texts={this.state.componentTexts.footer}
          click={this.handleClick}
          counter={this.state.counterFooter}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
