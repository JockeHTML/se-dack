import React from "react";
import classes from "./OpeningHours.module.css";
import { openingHoursData } from "../Data/Data";

const OpeningHours = () => {
  return (
    <div className={classes.openingHours}>
      <h3>ÖPPETTIDER</h3>
      <ul>
        {openingHoursData.map((data, index) => {
          const { title, text } = data;
          return (
            <li key={index}>
              <span>
                <p>{title}:</p> <p>{text}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OpeningHours;
