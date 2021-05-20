import React from "react";
import Washing from "../Washing/Washing";
import Content from "./Content";
import styles from "./MainServices.module.css";

function MainServices(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>Däck & Fälg</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>Allt inom däck & fälg </h1>
      </div>
      <Content />
      <Washing />
    </div>
  );
}

export default MainServices;
