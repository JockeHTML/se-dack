import React, { useEffect } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ title, price, one, two, three, four }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.card}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <h1>{price}</h1>
      </div>
      <ul>
        <li>
          <i class="fas fa-check-circle"></i>
          <p>{one}</p>
        </li>
        <li>
          <i class="fas fa-check-circle"></i>
          <p>{two}</p>
        </li>
        <li>
          <i class="fas fa-check-circle"></i>
          <p>{three}</p>
        </li>
        <li>
          <i class="fas fa-check-circle"></i>
          <p>{four}</p>
        </li>
      </ul>
      <span className={styles.time}>
        <i class="far fa-clock"></i>
        <p>45 min</p>
      </span>

      <div className={styles.buttons}>
        <Button />
      </div>
    </div>
  );
};

export default Card;
