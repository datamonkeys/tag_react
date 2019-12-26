import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.svg";

function Logo() {
  return <img src={logo} className="logo" alt="logo" />;
}

function GenerateH1() {
  return <h1>Welcome to React</h1>;
}

function Content() {
  return (
    <main>
      <Logo />
      <GenerateH1 />
      <p>Content Component</p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
  );
}

export default Content;
