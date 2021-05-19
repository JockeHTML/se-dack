import React from "react";
import classes from "./Price.module.css";

const Price = ({ price }) => {
  return (
    <div className={classes.price}>
      <h2>{price}</h2>
    </div>
  );
};

export default Price;
