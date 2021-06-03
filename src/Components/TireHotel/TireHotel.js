import React from "react";
import Content from "../MainServices/Content";
import styles from "./TireHotel.module.css";
import { dackHotellData } from "../Data/Data";
import Contact from "../Contact/Contact";

function TireHotel(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCKHOTELL</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Boka din plats redan idag</h1>
          <p>
            Förvara dina hjul hos oss. Enkelt och bekvämt. Vi förvarar samtliga
            hjul i vårt nybyggda däckhotell och kan garantera att dina hjul
            förvaras på ett korrekt sätt.
          </p>
        </div>
        {dackHotellData.map((data, index) => {
          const {
            img2,
            img3,
            img,
            title,
            text,
            heading,
            title2,
            text2,
            title3,
            text3,
            headingImg,
          } = data;
          return (
            <Content
              headingImg={headingImg}
              key={index}
              img2={img2}
              img3={img3}
              img={img}
              title2={title2}
              text2={text2}
              title3={title3}
              text3={text3}
              title={title}
              text={text}
              heading={heading}
            />
          );
        })}
      </div>
      <Contact />
    </div>
  );
}

export default TireHotel;
