import React from "react";
import "./button.css";

const Button = ({description,size}) => {
  return (
    <button type="button" className={`btn ${size}`}>
      {`${description}`}
    </button>
  );
};

export default Button;
