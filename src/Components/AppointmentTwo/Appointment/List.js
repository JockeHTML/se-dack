import React from "react";
import classes from "./List.module.css";

const List = ({ text }) => {
  return (
    <div className={classes.paperText}>
      <i className="fas fa-angle-right"></i>
      <li>
        <p>{text}</p>
      </li>
    </div>
  );
};

export default List;
