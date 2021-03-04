import React from "react";
import styles from "./Heading.module.css";
import logo from "../../images/bg6.jpg";
import { Link } from "react-router-dom";
import { headerData } from "../Data/Data";
import Sidebar from "./Sidebar/Sidebar";

function Heading(props) {
  return (
    <header className={styles.header}>
      <Sidebar />
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.content}>
        {headerData.map((data, index) => {
          const { icon, title, text } = data;
          return (
            <div key={index} className={styles.contact}>
              <span>
                <i className={icon}></i>
                <h4>{title}</h4>
              </span>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default Heading;
