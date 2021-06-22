import React, { useState } from "react";
import styles from "./SectionThree.module.css";
import Card from "../../Washing/Card";
import { däckData } from "../../Data/Data";
import { washData } from "../../Data/Data";
import ButtonGroup from "./ButtonGroup";

function SectionThree(props) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.sectionThree}>
      <div className={styles.title}>
        <div className={styles.subTitle}>
          {" "}
          <p>TJÄNSTER</p>
        </div>
        <h1>Populära tjänster</h1>
      </div>
      <ButtonGroup active={active} setActive={setActive} />
      {active ? (
        <div className={styles.content}>
          {washData.map((data, index) => {
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
      ) : (
        <div className={styles.content}>
          {däckData.map((data, index) => {
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
      )}
    </div>
  );
}

export default SectionThree;
