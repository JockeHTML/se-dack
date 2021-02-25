import React from "react";
import styles from "./Text.module.css";

function Text({ boxClick, setBoxClick }) {
  return (
    <div className={styles.text}>
      <h1 style={{ color: "var(--white)" }}>Välkommen till</h1>
      <h1 style={{ marginTop: "-20px", color: "var(--white)" }}>
        SE Däckservice
      </h1>
      <h2>Vi byter dina hjul</h2>
      <span>Från 295:-</span>
      <br />
      <h2>Boka däckhotell</h2>
      <span>Från 795:-</span>
    </div>
  );
}

export default Text;
