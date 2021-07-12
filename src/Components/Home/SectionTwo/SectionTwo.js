import React from "react";
import Content from "./Content/Content";
import styles from "./SectionTwo.module.css";
import Text from "./Text/Text";

function SectionTwo(props) {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.title}>
        <div className={styles.subTitle}>
          {" "}
          <p>SE DÄCKSERVICE AB</p>
        </div>
        <h1>Vi hjälper dig</h1>
      </div>
      <Text />
      <Content />
    </div>
  );
}

export default SectionTwo;
