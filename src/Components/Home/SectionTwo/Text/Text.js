import React from "react";
import car2 from "../../../../images/car2.jpg";
import { sectionTwo } from "../../../Data/Data";
import styles from "./Text.module.css";
import Button from "../../../Button/Button";

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
      <div className={styles.buttons}>
        <Button />
      </div>
    </div>
  );
}

export default Text;
