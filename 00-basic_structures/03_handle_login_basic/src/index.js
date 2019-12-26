import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

const ButtonLogin = props => {
  return <button onClick={props.onClick}>Login</button>;
};

const ButtonLogout = props => {
  return <button onClick={props.onClick}>Logout</button>;
};

// onclick events
const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    console.log("Login");
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogoutClick = () => {
    console.log("Logout");
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Button text={"Logout"} onClick={this.handleLogoutClick} />;
    } else {
      button = <Button text={"Login"} onClick={this.handleLoginClick} />;
    }

    return button;
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
