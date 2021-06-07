import React from "react";
import styles from "./SectionThree.module.css";
import Card from "../../Washing/Card";
import { popularaTjansterData } from "../../Data/Data";

function SectionThree(props) {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.title}>
        <div className={styles.subTitle}>
          {" "}
          <p>TJÄNSTER</p>
        </div>
        <h1>Populära tjänster</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <div className={styles.cards}>
        {popularaTjansterData.map((data, index) => {
          const { title, price, one, two, three, four, time } = data;
          return (
            <Card
              key={index}
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

export default SectionThree;
