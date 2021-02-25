import React from "react";
import styles from "./OpeningHours.module.css";
import { öppettider } from "../Data/Data";
import Button from "../Button/Button";

function OpeningHours(props) {
  return (
    <div className={styles.OpeningHours}>
      <div className={styles.topImage}></div>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Öppettider
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>Verkstad & Rekond</h2>
      <div className={styles.content}>
        {öppettider.map((data, index) => {
          const { title, text } = data;
          return (
            <ul>
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
