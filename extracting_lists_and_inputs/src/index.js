import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      firstNameInput: "",
      lastNameInput: ""
    };
  }

  handleFirstNameInput = event => {
    this.setState({
      firstNameInput: event.target.value
    });
  };

  handleLastNameInput = event => {
    this.setState({
      lastNameInput: event.target.value
    });
  };

  handleClick = () => {
    // get data from state
    const fullName = `${this.state.firstNameInput}  ${this.state.lastNameInput}`;

    // get names array and push data to it
    const names = this.state.names;
    names.push(fullName);

    // set it to state
    this.setState({
      names,
      firstNameInput: "",
      lastNameInput: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstNameInput}
          onChange={this.handleFirstNameInput}
          placeholder="First"
        />
        <input
          type="text"
          value={this.state.lastNameInput}
          onChange={this.handleLastNameInput}
          placeholder="Last"
        />
        <button onClick={this.handleClick}>Add</button>
        <Lists names={this.state.names} />
      </div>
    );
  }
}

const Lists = props => {
  const names = props.names; // Here we get our names array which we want to display

  // We iterate over the array of names and create a ListItem do be displayed
  const listItems = names.map((name, index) => (
    <ListItem key={index} name={name} />
  ));
  return <ul>{listItems}</ul>;
};

const ListItem = props => {
  const { name } = props; //We deconstruct the object here to get our name
  return (
    <li>
      <span>{name}</span>
    </li>
  );
};

ReactDOM.render(<Inputs />, document.getElementById("root"));
