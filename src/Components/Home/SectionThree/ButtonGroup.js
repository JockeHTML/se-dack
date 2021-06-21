import React from "react";
import styles from "./SectionThree.module.css";

const ButtonGroup = ({ active, setActive }) => {
  return (
    <div className={styles.buttons}>
      <span>
        <button
          className={active ? styles.button : styles.active}
          type="button"
          aria-label="rekond"
          onClick={() => setActive(false)}
        >
          Rekond
        </button>
        <button
          className={active ? styles.active : styles.button}
          type="button"
          aria-label="däck"
          onClick={() => setActive(true)}
        >
          Verkstad
        </button>
      </span>
    </div>
  );
};

export default ButtonGroup;
