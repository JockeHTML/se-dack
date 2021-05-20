import React from "react";
import styles from "./SectionFour.module.css";
import Contact from "../../Contact/Contact";

function SectionFour(props) {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.title}>
        <h4>Kontakta oss</h4>
        <h1>Hör av dig redan idag</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default SectionFour;
