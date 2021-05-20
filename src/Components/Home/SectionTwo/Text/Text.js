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
            <h3>Därför väljer du</h3>
            <h3>SE Däckservice</h3>
          </div>
          {sectionTwo.map((data, index) => {
            const { icon, text } = data;
            return (
              <span key={index}>
                <i class="fas fa-check-circle"></i> <h4>{text}</h4>
              </span>
            );
          })}
          <div className={styles.buttons}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
