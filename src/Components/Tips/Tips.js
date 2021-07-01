import React from "react";
import Text from "./Text";
import styles from "./tips.module.css";

const Tips = () => {
  return (
    <div className={styles.tips}>
      <div className={styles.topImage}>
        <h1>TIPS & RÅD</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Viktigt att tänka på</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            laudantium quisquam inventore iste nobis velit esse, odit voluptas
            aspernatur! Ab?
          </p>
        </div>
        <Text />
      </div>
    </div>
  );
};

export default Tips;
