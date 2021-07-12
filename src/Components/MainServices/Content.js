import React from "react";
import Text from "./Text";
import Image from "./Image";
import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <Image headingImg={props.headingImg} />
      <Text
        subHeading={props.subHeading}
        img2={props.img2}
        img3={props.img3}
        img={props.img}
        title2={props.title2}
        text2={props.text2}
        title3={props.title3}
        text3={props.text3}
        title={props.title}
        text={props.text}
        heading={props.heading}
        price1={props.price1}
        price2={props.price2}
        price3={props.price3}
      />
    </div>
  );
};

export default Content;
