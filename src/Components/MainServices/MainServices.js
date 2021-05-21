import React from "react";
import Card from "../Washing/Card";
import Content from "./Content";
import styles from "./MainServices.module.css";
import { däckData } from "../Data/Data";
import { däckverkstadsData } from "../Data/Data";

function MainServices(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCKVERKSTAD</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>Vi hjälper dig hela vägen</h1>
      </div>
      {däckverkstadsData.map((data, index) => {
        const { title, text, heading, title2, text2, title3, text3 } = data;
        return (
          <Content
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
      <div className={styles.title} style={{ paddingTop: "0" }}>
        <h4>DÄCKVERKSTAD</h4>
        <h1 style={{ marginBottom: "1rem" }}>Boka din tjänst</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <div className={styles.content}>
        {däckData.map((data, index) => {
          const { title, price, one, two, three, four, time } = data;
          return (
            <Card
              title={title}
              price={price}
              one={one}
              two={two}
              three={three}
              four={four}
              time={time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainServices;
