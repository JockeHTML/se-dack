import React from "react";
import styles from "./SectionThree.module.css";
import Content from "./Content/Content";

function SectionThree(props) {
  return (
    <div className={styles.sectionThree}>
      <h1>Populära tjänster</h1>

      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
}

export default SectionThree;
