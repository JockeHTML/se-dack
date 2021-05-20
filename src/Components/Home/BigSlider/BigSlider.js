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
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Kontakta oss idag</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            laudantium repellendus eos fugiat numquam dolorum accusamus delectus
            magni beatae eius.
          </p>
          <div className={classes.buttons}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSlider;
