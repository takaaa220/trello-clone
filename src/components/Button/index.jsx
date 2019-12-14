import React from "react";

const Button = ({ variant = "contained", onClick, children }) => {
  return (
    <button data-variant={variant} className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
