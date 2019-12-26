import React from "react";

function Welcome(props) {
  /*
  <Welcome name="Sarah" />
  Here we can call props.name and this will get the text from the attribute (in this case the attr is name)
  */
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
