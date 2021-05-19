import React, { useState } from "react";
import styles from "./SectionOne.module.css";
import Text2 from "./Text2/Text2";
import Text from "./Text/Text";

function SectionOne(props) {
  const [boxClick, setBoxClick] = useState(false);

  return (
    <div className={styles.sectionOne}>
      <Text />
      <Text2 />
    </div>
  );
}

export default SectionOne;
