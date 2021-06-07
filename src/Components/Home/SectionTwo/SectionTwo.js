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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum
          perspiciatis ullam laborum ut tenetur labore aliquid dolore, amet
          dolores?
        </p>
      </div>
      <div className={styles.content}>
        <Text />
        <Content />
      </div>
    </div>
  );
}

export default SectionTwo;
