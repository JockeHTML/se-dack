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
      <h1>Allt inom däck, fälg och rekond.</h1>
      <p>
        Välkommen till SE Däckservice. Vi erbjuder däck och fälg i olika
        prisklasser. Rekond utför vi året om, allt från utvändig handtvätt till
        helrekond och lackförsegling. Behöver du förvaring för dina däck?
        Välkommen att kontakta oss redan idag.
      </p>
      <div className={styles.buttons}>
        <Button />
        <ButtonBorder />
      </div>
    </div>
  );
}

export default Text;
