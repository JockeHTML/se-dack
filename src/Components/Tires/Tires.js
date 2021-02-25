import React from "react";
import styles from "./Tires.module.css";
import { däck } from "../Data/Data";

function Tires(props) {
  return (
    <div className={styles.tires}>
      <div className={styles.topImage}></div>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Däck Information
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>
        Sommar & Vinterdäck
      </h2>
      {däck.map((data, index) => {
        const { title, text1, text2, text3, text4, icon, subTitle } = data;
        return (
          <div className={styles.content}>
            <div className={styles.icon}>
              <i className={icon}></i>
            </div>
            <div className={styles.text}>
              <h1>{title}</h1>
              <h3 style={{ marginTop: "-25px", color: "var(--color)" }}>
                {subTitle}
              </h3>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tires;
