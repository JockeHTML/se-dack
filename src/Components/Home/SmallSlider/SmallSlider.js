import React from "react";
import styles from "./SmallSlider.module.css";
import Button from "../../Button/Button";

const SmallSlider = () => {
  return (
    <div className={styles.smallSlider}>
      <div className={styles.content}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h2>BOKA DIN TID ELLER RING OSS, 060 - 61 91 35</h2>
      </div>
      <div className={styles.buttons}>
        <Button />
      </div>
    </div>
  );
};

export default SmallSlider;
