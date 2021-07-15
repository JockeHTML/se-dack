import React from "react";
import styles from "./Heading.module.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { headerData } from "../Data/Data";
import Sidebar from "./Sidebar/Sidebar";

function Heading(props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="sedäck logo" />
        </Link>
      </div>

      <div className={styles.content}>
        {headerData.map((data, index) => {
          const { icon, title, text } = data;
          return (
            <div key={index} className={styles.contact}>
              <div href="tel:060619135" className={styles.top}>
                <img src={icon} alt={title} />
              </div>
              <span>
                <h4>{title}</h4>
                <p>{text}</p>
              </span>
            </div>
          );
        })}
      </div>
      <Sidebar />
    </div>
  );
}

export default Heading;
