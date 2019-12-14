import React from "react";

const Input = props => {
  const Component = props.isTextArea ? "textarea" : "input";

  return (
    <Component
      type="text"
      className={`Input${props.isTextArea ? " -textarea" : ""}`}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
