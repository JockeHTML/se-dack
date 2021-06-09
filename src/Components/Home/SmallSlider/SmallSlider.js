import React from "react";
import styles from "./SmallSlider.module.css";
import BokaButton from "../../BokaButton/BokaButton";

const SmallSlider = () => {
  return (
    <div className={styles.smallSlider}>
      <div className={styles.content}>
        <span>
          {" "}
          <p>SE DÄCKSERVICE AB</p>
        </span>
        <h2>BOKA DIN TID ELLER RING OSS, 060 - 61 91 35</h2>
      </div>
      <div className={styles.buttons}>
        <BokaButton />
      </div>
    </div>
  );
};

export default SmallSlider;
