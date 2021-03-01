import React from "react";
import styles from "./Footer.module.css";
import { socialMedia } from "../Data/Data";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <span>
          {" "}
          <h3>SE Däckservice AB</h3>
          <p>© Copyright SE Däckservice AB 2021</p>
        </span>
        <div className={styles.social}>
          {socialMedia.map((data, index) => {
            const { url, icon } = data;
            return (
              <a key={index} href={url}>
                <i className={icon}></i>{" "}
              </a>
            );
          })}
        </div>
        <span>
          {" "}
          <h3>Ortviksvägen 39 </h3>
          <p>856 33 Sundsvall</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
