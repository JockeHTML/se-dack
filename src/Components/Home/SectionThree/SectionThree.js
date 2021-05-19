import React from "react";
import Washing from "../../Washing/Washing";
import styles from "./SectionThree.module.css";

function SectionThree(props) {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.title}>
        <h4>Tvätt och Rekond</h4>
        <h1>Det som passar dig</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <Washing />
    </div>
  );
}

export default SectionThree;
