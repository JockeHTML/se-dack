import React from "react";
import car2 from "../../../../images/car2.jpg";
import { sectionTwo } from "../../../Data/Data";
import styles from "./Text.module.css";

function Text(props) {
  return (
    <div className={styles.text}>
      <img src={car2} alt="" />
      <div className={styles.icons}>
        {sectionTwo.map((data, index) => {
          const { icon, text } = data;
          return (
            <span key={index}>
              <i className={icon}></i> <h3>{text}</h3>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Text;
