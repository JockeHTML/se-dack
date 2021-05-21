import React from "react";
import styles from "./Staff.module.css";
import { personal } from "../Data/Data";
import Contact from "../Contact/Contact";

function Staff(props) {
  return (
    <div className={styles.staff}>
      <div className={styles.title}>
        <h4>SE Däckservice AB</h4>
        <h1>Vi som hjälper dig</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <div className={styles.gridContainer}>
        {personal.map((data, index) => {
          const { title, text, text2, img } = data;
          return (
            <div className={styles.card}>
              <img src={img} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
      <Contact />
    </div>
  );
}

export default Staff;
