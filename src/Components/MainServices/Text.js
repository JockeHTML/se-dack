import React, { useEffect } from "react";
import styles from "./Text.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = (props) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.text}>
      <div className={styles.card}>
        <img src={props.img} alt={props.title} />
        <span>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </span>
      </div>
      <div className={styles.card}>
        <img src={props.img2} alt={props.title2} />
        <span>
          <h4>{props.title2}</h4>
          <p>{props.text2}</p>
        </span>
      </div>
      <div className={styles.card}>
        <img src={props.img3} alt={props.title3} />
        <span>
          <h4>{props.title3}</h4>
          <p>{props.text3}</p>
        </span>
      </div>
    </div>
  );
};

export default Text;
