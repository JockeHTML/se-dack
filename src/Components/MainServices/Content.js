import React from "react";
import Text from "./Text";
import Image from "./Image";
import styles from "./Content.module.css";

const Content = ({
  img2,
  img3,
  img,
  heading,
  title,
  text,
  title2,
  text2,
  title3,
  text3,
}) => {
  return (
    <div className={styles.content}>
      <Image />
      <Text
        img2={img2}
        img3={img3}
        img={img}
        title2={title2}
        text2={text2}
        title3={title3}
        text3={text3}
        title={title}
        text={text}
        heading={heading}
      />
    </div>
  );
};

export default Content;