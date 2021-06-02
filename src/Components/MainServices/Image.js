import React from "react";
import styles from "./Image.module.css";

const Image = ({ headingImg }) => {
  return (
    <div className={styles.image}>
      <img src={headingImg} alt="Bild på tjänst" />
    </div>
  );
};

export default Image;
