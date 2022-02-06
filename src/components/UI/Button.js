import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick} // Adding this attribute in order to use it in other components.
    >
      {props.children}
    </button>
  );
};

export default Button;
