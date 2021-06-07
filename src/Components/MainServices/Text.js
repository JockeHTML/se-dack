import React, { useEffect } from "react";
import styles from "./Text.module.css";

const Text = ({
  img2,
  img3,
  img,
  heading,
  title,
  text,
  title2,
  text2,
  title3,
  text3,
}) => {
  return (
    <div className={styles.text}>
      <div className={styles.card}>
        <img src={img} alt={title} />
        <span>
          <h4>{title}</h4>
          <p>{text}</p>
        </span>
      </div>
      <div className={styles.card}>
        <img src={img2} alt={title2} />
        <span>
          <h4>{title2}</h4>
          <p>{text2}</p>
        </span>
      </div>
      <div className={styles.card}>
        <img src={img3} alt={title3} />
        <span>
          <h4>{title3}</h4>
          <p>{text3}</p>
        </span>
      </div>
    </div>
  );
};

export default Text;
