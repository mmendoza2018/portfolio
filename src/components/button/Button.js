import React from "react";
import "./button.css";

const Button = ({description,size,clickFunction}) => {
  return (
    <button type="button" className={`btn ${size}`} onClick={clickFunction}>
      {`${description}`}
    </button>
  );
};

export default Button;
