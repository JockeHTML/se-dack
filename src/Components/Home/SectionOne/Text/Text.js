import React from "react";
import styles from "./Text.module.css";
import Button from "../../../Button/Button";
import ButtonBorder from "../../../ButtonBorder/ButtonBorder";

function Text() {
  return (
    <div className={styles.text}>
      <span>
        {" "}
        <h4>DIN LOKALA DÄCKVERKSTAD</h4>
      </span>
      <h1>Vi hjälper dig med allt inom däck, fälg och rekond.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        omnis labore placeat mollitia laborum odit vel nobis corrupti
        repudiandae tempora, modi aperiam, iusto hic corporis!
      </p>
      <div className={styles.buttons}>
        <Button />
        <ButtonBorder />
      </div>
    </div>
  );
}

export default Text;
