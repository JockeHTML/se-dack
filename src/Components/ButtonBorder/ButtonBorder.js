import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className={styles.contactBtn}>
      <Link onClick={() => window.scrollTo(0, 0)} to="/appointment">
        Boka tid
      </Link>
      <i class="fas fa-angle-right"></i>
    </div>
  );
}

export default Button;
