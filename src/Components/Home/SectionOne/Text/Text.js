import React from "react";
import styles from "./Text.module.css";
import Button from "../../../Button/Button";
import ButtonBorder from "../../../ButtonBorder/ButtonBorder";

function Text() {
  return (
    <div className={styles.text}>
      <h4>DIN LOKALA DÄCKVERKSTAD</h4>
      <h1>Vi hjälper dig med allt inom däck, fälg och rekond.</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        provident quaerat minus corporis saepe non quam nam delectus quidem
        iste?
      </p>
      <div className={styles.buttons}>
        <Button />
        <ButtonBorder />
      </div>
    </div>
  );
}

export default Text;
