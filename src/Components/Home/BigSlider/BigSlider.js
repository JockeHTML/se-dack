import React from "react";
import classes from "./BigSlider.module.css";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const BigSlider = () => {
  return (
    <div className={classes.bigSlider}>
      <div className={classes.image}></div>
      <div className={classes.text}>
        <div className={classes.content}>
          <span>
            {" "}
            <h4>SE DÄCKSERVICE AB</h4>
          </span>
          <h1>Kontakta oss idag</h1>
          <p>Behöver du hjälp med Däck, Fälg eller Rekond?</p>
          <div className={classes.buttons}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSlider;
