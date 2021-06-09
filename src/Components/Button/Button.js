import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <span>
      <Link
        className={styles.contactBtn}
        onClick={() => window.scrollTo(0, 0)}
        to="/tjanster"
      >
        TJÄNSTER
        <i className="fas fa-angle-right"></i>
      </Link>
    </span>
  );
}

export default Button;
