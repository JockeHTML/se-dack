import React from "react";
import styles from "./Nav.module.css";
import { navLinks } from "../Data/Data";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.links}>
        <ul className={styles.homeLink}>
          <li>
            <Link to="/home">HEM</Link>
          </li>
        </ul>
        <ul className={styles.restofLinks}>
          {navLinks.map((link, index) => {
            const { page, url } = link;
            return (
              <li>
                <Link to={url}>{page.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
