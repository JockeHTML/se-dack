import React from "react";
import Content from "./Content/Content";
import styles from "./SectionTwo.module.css";
import Text from "./Text/Text";

function SectionTwo(props) {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.title}>
        <h4>SE Däck & Bilservice</h4>
        <h1>Vi hjälper dig</h1>
      </div>
      <div className={styles.content}>
        <Text />
        <Content />
      </div>
    </div>
  );
}

export default SectionTwo;
