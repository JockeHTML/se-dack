import React from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.button}>
      <a href="https://www.google.se">
        Boka
        <i className="fas fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Button;
