import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      className={styles.contactBtn}
      onClick={() => window.scrollTo(0, 0)}
      to="/tjanster"
    >
      Tjänster
    </Link>
  );
}

export default Button;
