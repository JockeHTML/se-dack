import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { navLinks } from "../Data/Data";
import { Link } from "react-router-dom";

function Nav(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);
  return (
    <div className={scroll ? styles.sticky : styles.nav}>
      <div className={styles.links}>
        <ul className={styles.restofLinks}>
          {navLinks.map((link, index) => {
            const { page, url } = link;
            return (
              <li key={index}>
                <Link onClick={() => window.scrollTo(0, 0)} to={url}>
                  {page.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
