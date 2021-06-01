import React from "react";
import styles from "./SectionOne.module.css";
import Text from "./Text/Text";

function SectionOne(props) {
  return (
    <div className={styles.sectionOne}>
      <Text />
    </div>
  );
}

export default SectionOne;
