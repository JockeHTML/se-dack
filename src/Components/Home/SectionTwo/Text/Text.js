import React, { useEffect } from "react";
import car2 from "../../../../images/car2.jpg";
import { sectionTwo } from "../../../Data/Data";
import styles from "./Text.module.css";
import Button from "../../../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

function Text(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.text}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={car2} alt="" />
        </div>
        <div data-aos="fade-up" className={styles.icons}>
          <div className={styles.heading}>
            <div className={styles.subTitle}>
              <p>Därför väljer du</p>
              <p>SE Däckservice</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                quasi maxime ex amet unde minima? Quo nobis tempora aspernatur
                nemo.
              </p>
            </div>
          </div>
          <ul>
            {sectionTwo.map((data, index) => {
              const { icon, text } = data;
              return (
                <li key={index}>
                  <i className="fas fa-check-circle"></i> <p>{text}</p>
                </li>
              );
            })}
          </ul>
          <div className={styles.buttons}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
