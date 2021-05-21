import React from "react";
import Card from "./Card";
import styles from "./Washing.module.css";
import { washData } from "../Data/Data";

const Washing = () => {
  return (
    <div className={styles.wash}>
      <div className={styles.content}>
        {washData.map((data, index) => {
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
};

export default Washing;
