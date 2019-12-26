import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
