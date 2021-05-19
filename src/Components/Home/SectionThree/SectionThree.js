import React from "react";
import styles from "./SectionThree.module.css";

function SectionThree(props) {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.title}>
        <h4>Tvätt och Rekond</h4>
        <h1>Det som passar dig</h1>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default SectionThree;
