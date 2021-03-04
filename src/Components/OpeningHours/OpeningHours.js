import React from "react";
import styles from "./OpeningHours.module.css";
import { öppettider } from "../Data/Data";
import Button from "../Button/Button";

function OpeningHours(props) {
  return (
    <div className={styles.openingHours}>
      <div className={styles.topImage}></div>
      <h1>Öppettider</h1>
      <h2>Verkstad & Rekond</h2>
      <div className={styles.content}>
        {öppettider.map((data, index) => {
          const { title, text } = data;
          return (
            <ul key={index}>
              <li>
                <h3> {title} </h3>
                <p> {text} </p>
              </li>
            </ul>
          );
        })}
      </div>
      <Button />
    </div>
  );
}

export default OpeningHours;
