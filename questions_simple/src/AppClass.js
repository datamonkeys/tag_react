import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    );
  }
}

// COMPONENTS
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h1 id="title">Game</h1>
      </header>
    );
  }
}

class Question extends React.Component {
  render() {
    return this.props.text ? (
      <div id="questions">
        <h2 id="question" dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    ) : <h2>Loading...</h2>;
  }
}

class Answer extends React.Component {
  render() {
    return (
      <li className="answerOption" onClick={() => this.props.validateQuestion(this.props.index)}>  
        {this.props.choice}
      </li>
    );
  }
}

class Answers extends React.Component {
  generateAnswers = () => {
    let answers = [];
    this.props.choices.map((choice, index) =>
      answers.push(
        <Answer
          key={index}
          choice={choice}
          index={index}
          validateQuestion={this.props.validateQuestion}
        />
      )
    );
    return answers;
  };

  render() {
    return (
      <div id="answer">
        <ul id="answers" className="answerOptions">
          {this.props.choices && this.generateAnswers()}
        </ul>
      </div>
    );
  }
}

class Validation extends React.Component {
  render(){
    return this.props.validation ? <div className="validation">{this.props.validation}</div> : null;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: false,
      question: false,
      validation: false,
      correctAnswer: false,
      index: 0
    };
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    fetch(
      "https://us-central1-datamonkeys-a03bd.cloudfunctions.net/api/questions"
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          questions: data,
          question: data[this.state.index],
          correctAnswer: data[this.state.index].correctAnswer
        });
      });
  };

  validateQuestion = correctAnswer => {
    let validation = "";

    if(correctAnswer === this.state.correctAnswer){
      validation = "correct";
    } else {
      validation = "incorrect";
    }

    this.setState({
      validation: validation
    });

    this.changeQuestion();
  };

  changeQuestion = () => {
    const n = Math.floor(Math.random() * this.state.questions.length);

    this.setState({
      question: this.state.questions[n],
      correctAnswer: this.state.questions[n].correctAnswer
    });
  };

  render() {
    return (
      <div className="container">
        <Validation validation={this.state.validation} />
        <Question text={this.state.question.question} />
        <Answers
          choices={this.state.question.answers}
          validateQuestion={this.validateQuestion}
        />
      </div>
    );
  }
}

export default App;
