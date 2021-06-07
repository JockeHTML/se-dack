import React, { useEffect } from "react";
import styles from "./Content.module.css";
import { sectionThree } from "../../../Data/Data";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Content(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.gridContainer}>
      {sectionThree.map((data, index) => {
        const { title, text, src, link } = data;
        return (
          <div data-aos="fade-up" key={index} className={styles.gridItem}>
            <span>
              <img src={src} alt="" />
            </span>
            <h3>{title.toUpperCase()}</h3>
            <p>{text.slice(0, 99) + "..."}</p>
            <span>
              <Link onClick={() => window.scrollTo(0, 0)} to={link}>
                Till {title}
                <i className="fas fa-angle-right"></i>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
