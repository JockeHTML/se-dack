import React from "react";
import Staff from "./Staff";
import styles from "../Contact/ContactPage.module.css";

const StaffPage = () => {
  return (
    <div>
      <div className={styles.topImage}>
        <h1>PERSONAL</h1>
      </div>
      <Staff />
    </div>
  );
};

export default StaffPage;
