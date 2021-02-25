import React from "react";
import styles from "./SectionTwo.module.css";
import Text from "./Text/Text";

function SectionTwo(props) {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1 style={{ marginBottom: "0" }}>Därför ska du välja</h1>
          <h1 style={{ color: "var(--color)", marginTop: "-20px" }}>
            SE Däckservice
          </h1>
        </div>
        <Text />
      </div>
    </div>
  );
}

export default SectionTwo;
