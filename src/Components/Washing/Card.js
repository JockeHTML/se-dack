import React, { useEffect } from "react";
import styles from "./Card.module.css";
import BokaButton from "../BokaButton/BokaButton";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ title, price, one, two, three, four, time }) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.card}>
      <div className={styles.title}>
        <div className={styles.subTitle}>
          <h4>{title}</h4>
        </div>

        <h1>{price}</h1>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <i class="fas fa-check"></i>
            <p>{one}</p>
          </li>
          <li>
            <i class="fas fa-check"></i> <p>{two}</p>
          </li>
          <li>
            <i class="fas fa-check"></i> <p>{three}</p>
          </li>
          <li>
            <i class="fas fa-check"></i> <p>{four}</p>
          </li>
        </ul>
        <span className={styles.time}>
          <i className="far fa-clock"></i>
          <p>{time}</p>
        </span>
      </div>
      <div className={styles.buttons}>
        <BokaButton />
      </div>
    </div>
  );
};

export default Card;
