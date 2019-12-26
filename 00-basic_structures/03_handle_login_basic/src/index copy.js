import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* // component
const DisplayText = props => {
  return <h1>{props.text}</h1>;
};

// another component
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  render() {
    return (
      <div className="wrapper">
        <button type="button" onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {this.state.isToggleOn ? <DisplayText text="Text" /> : null}
      </div>
    );
  }
} */

ReactDOM.render(<Toggle />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
