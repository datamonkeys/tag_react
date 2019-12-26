import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  if(props.isLoggedIn){
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }

}

ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById("root")
);
