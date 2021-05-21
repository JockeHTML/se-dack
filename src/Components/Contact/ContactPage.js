import React from "react";
import Contact from "./Contact";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={styles.topImage}>
        <h1>KONTAKT</h1>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
