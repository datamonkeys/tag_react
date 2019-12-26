import React, { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
const Header = () => {
  return (
    <header id="header">
      <h1 id="title">Game</h1>
    </header>
  );
};

const Question = () => {
  return (
    <h2 id="question">
      What is the correct JavaScript syntax to change the content of the HTML
      element bellow?
      <br />
      <br />
      &lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;
    </h2>
  );
};

const Questions = () => {

  const [questions, setQuestions] = useState([]);

  fetch(
    "https://us-central1-datamonkeys-a03bd.cloudfunctions.net/api/questions"
  )
  .then(resp => resp.json())
  .then(data => {
    setQuestions(data);
  });

  return (
    <div id="questions">
      {
        questions.map(item => {
           return <Question />
        })
      }
    </div>
  );
};

const Answer = () => {
  return (
    <ul id="answers" className="answerOptions">
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id="0"
          value="0"
        />
        <label className="radioCustomLabel" htmlFor="0">
          document.getElementById("demo").innerHTML = "Hello World!";
        </label>
      </li>
    </ul>
  );
};

const Answers = () => {
  return (
    <div id="answer">
      <Answer />
    </div>
  );
};

const Button = () => {
  return <button id="confirm">Confirm</button>;
};

const Container = () => {
  return (
    <div className="container">
      <Questions />
      <Answers />
      <Button />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
};

export default App;
