import React from "react";
import Content from "../MainServices/Content";
import styles from "./TireHotel.module.css";
import Contact from "../Contact/Contact";
import { dackHotellData } from "../Data/Data";

const TireHotel = () => {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCKHOTELL</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Boka din plats</h1>
          <p>
            Förvara dina hjul hos oss, enkelt och bekvämt. Vi förvarar samtliga
            hjul i vårt nybyggda däckhotell och kan garantera att dina hjul
            förvaras på ett korrekt sätt.
          </p>
        </div>
        {dackHotellData.map((data, index) => {
          return <Content key={index} {...data} />;
        })}
      </div>
      <Contact />
    </div>
  );
};

export default TireHotel;
