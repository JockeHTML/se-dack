import React from "react";
import styles from "./Button.module.css";

function BokaButton(props) {
  return (
    <span>
      <a
        target="_blank"
        rel="noreferrer"
        className={styles.contactBtn}
        onClick={() => window.scrollTo(0, 0)}
        href="https://sedackservice.compilator.com/public/cms?Id=1&CompanyId=8b3db2d2-5663-437f-9099-c3d4b8ee5825&branchId=1"
      >
        Boka Tid
      </a>
    </span>
  );
}

export default BokaButton;
