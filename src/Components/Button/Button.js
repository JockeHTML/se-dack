import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className={styles.contactBtn}>
      <span>
        <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
          Kontakta oss
        </Link>
      </span>
    </div>
  );
}

export default Button;
