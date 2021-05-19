import React from "react";
import styles from "./Content.module.css";
import { sectionThree } from "../../../Data/Data";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div className={styles.gridContainer}>
      {sectionThree.map((data, index) => {
        const { title, text, src } = data;
        return (
          <div key={index} className={styles.gridItem}>
            <span>
              <img src={src} alt="" />
            </span>
            <h3>{title.toUpperCase()}</h3>
            <p>{text.slice(0, 99) + "..."}</p>
            <span>
              <Link onClick={() => window.scrollTo(0, 0)} to="/priceList">
                Läs mer <i class="fas fa-angle-right"></i>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
