import React from "react";
import "./styles.css";

const Header = () => {
  const text = 'Header Component';
  return <GenerateHeader message={text} />;
};

/*function GenerateHeader(props) {
  return <header>
    <p>{props.message}</p>
  </header>;
}*/

function GenerateHeader({message}) {
  return <header>
    <p>{message}</p>
  </header>;
}

export default Header;
