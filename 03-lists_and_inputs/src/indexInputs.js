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

  /* handleFirstNameInput = event => {
    this.setState({
      firstNameInput: event.target.value
    });
  };

  handleLastNameInput = event => {
    this.setState({
      lastNameInput: event.target.value
    });
  }; */

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.logFields();
      }
    );
  };

  logFields = () => {
    const { firstNameInput, lastNameInput } = this.state;
    console.log("full name:", `${firstNameInput} ${lastNameInput}`);
  };

  handleClick = () => {
    // get data from state

    const fullName = `${this.state.firstNameInput}  ${this.state.lastNameInput}`;

    this.setState(prevState => {
      const names = prevState.names;
      names.push(fullName);

      return {
        names: names,
        firstNameInput: "",
        lastNameInput: ""
      };
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstNameInput}
          onChange={this.handleInputChange}
          placeholder="First"
          name="firstNameInput"
        />
        <input
          type="text"
          value={this.state.lastNameInput}
          onChange={this.handleInputChange}
          placeholder="Last"
          name="lastNameInput"
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
