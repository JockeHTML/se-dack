import React from "react";
import styles from "./Text.module.css";
import Button from "../../../Button/Button";
import ButtonBorder from "../../../ButtonBorder/ButtonBorder";

function Text({ boxClick, setBoxClick }) {
  return (
    <div className={styles.text}>
      <h4>DIN EXPERT INOM DÄCK & FÄLG!</h4>
      <h1>Lorem ipsum dolor sit amet consectetur </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        consequuntur velit ducimus ad assumenda nemo molestias tempora quia
        nobis accusantium.
      </p>
      <div className={styles.buttons}>
        <Button />
        <ButtonBorder />
      </div>
    </div>
  );
}

export default Text;
