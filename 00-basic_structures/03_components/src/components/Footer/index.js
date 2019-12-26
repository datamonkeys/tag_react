import React from "react";
import "./styles.css";

function Footer(props) {
  return (
    <footer>
      <p>
        {props.textString}
      </p>
    </footer>
  );
}

export default Footer;
