import React, { useEffect } from "react";
import styles from "./Staff.module.css";
import { personal } from "../Data/Data";
import Contact from "../Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function Staff(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.staff}>
      <div className={styles.title}>
        <h4>SE Däckservice AB</h4>
        <h1>Vi som hjälper dig</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <div data-aos="fade-up" className={styles.gridContainer}>
        {personal.map((data, index) => {
          const { title, text, text2, img } = data;
          return (
            <div key={index} className={styles.card}>
              <img src={img} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
      <Contact />
    </div>
  );
}

export default Staff;
