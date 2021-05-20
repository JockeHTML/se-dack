import React from "react";
import Text from "./Text";
import Image from "./Image";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <Image />
      <Text />
    </div>
  );
};

export default Content;
