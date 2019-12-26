import React from "react";
import ReactDOM from "react-dom";

// import Homework from "./App.js";
import "./index.css";

// Here we discussing rendering components based on conditions and how to send data to our compononents

// Example 1: How to display a basic JSX element - no condition

/* function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

ReactDOM.render(<UserGreeting />, document.getElementById("root"));
 */

// Example 2: How to decide on what should be rendered based on a boolean variable. Conditional rendering

/* function DisplayControl(props) {
  return props.param1 ? (
    <FirstNameLastName fName={props.firstName} lName={props.lastName} />
  ) : (
    <LastNameFirstName fName={props.firstName} lName={props.lastName} />
  );
}

ReactDOM.render(
  <DisplayControl
    param1={true}
    firstName={name.firstName}
    lastName={name.lastName}
  />,
  document.getElementById("root")
); */

// Example how to handle a state with a class component
// We want to click a button "increase" to increase a counter which should be displayed in our UI. If counter>2 we show 2 other buttons - decrease and reset. decrease will decrease the counter, reset will set the counter to 0. Everytime we push a button the counter will be re-rendered.

// We create a button as a component for reusability
const Button = props => {
  return <button onClick={props.orange}>{props.text}</button>;
};

// We create a class to handle our state - in this case everytime a user presses a button we change the state and our UI gets re-rendered

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  // here we define a method which uses setState and updates our state variable counter (+1)
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  // here we define a method which uses setState and updates our state variable counter (-1)

  decreaseCounter = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };
  // here we define a method which uses setState resets our state variable counter=0

  resetCounter = () => {
    this.setState({
      counter: 0
    });
  };
  // here we return what we want to see in the UI and we make the decision to show particular buttons based on the state
  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <br />
        <Button orange={this.increaseCounter} text={"Increase"} />
        {this.state.counter > 0 && (
          <>
            <Button orange={this.decreaseCounter} text={"Decrease"} />

            <Button orange={this.resetCounter} text={"Reset"} />
          </>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
