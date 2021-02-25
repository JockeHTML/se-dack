import React, { useState } from "react";
import styles from "./SectionOne.module.css";
import Box from "./Box/Box";
import Text from "./Text/Text";

function SectionOne(props) {
  const [boxClick, setBoxClick] = useState(false);

  return (
    <div className={styles.sectionOne}>
      <Text />
      <Box boxClick={boxClick} setBoxClick={setBoxClick} />
    </div>
  );
}

export default SectionOne;
