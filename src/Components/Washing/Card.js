import React from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({ title, price, one, two, three, four }) => {
  return (
    <div className={styles.card}>
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
      <div className={styles.buttons}>
        <Button />
      </div>
    </div>
  );
};

export default Card;
