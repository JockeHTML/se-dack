import React, { useEffect } from "react";
import styles from "./Text.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import BokaButton from "../BokaButton/BokaButton";

const Text = (props) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-up" className={styles.text}>
      <div className={styles.card}>
        <img src={props.img} alt={props.title} />
        <span>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <div className={styles.prices}>
            <a
              target="__blank"
              href="https://sedackservice.compilator.com/public/cms?Id=1&CompanyId=8b3db2d2-5663-437f-9099-c3d4b8ee5825&branchId=1"
            >
              <p>{props.price1}</p>
            </a>
          </div>
        </span>
      </div>
      <div className={styles.card}>
        <img src={props.img2} alt={props.title2} />
        <span>
          <h4>{props.title2}</h4>
          <p>{props.text2}</p>
          <div className={styles.prices}>
            <a
              target="__blank"
              href="https://sedackservice.compilator.com/public/cms?Id=1&CompanyId=8b3db2d2-5663-437f-9099-c3d4b8ee5825&branchId=1"
            >
              <p>{props.price2}</p>
            </a>
          </div>
        </span>
      </div>
      <div className={styles.card}>
        <img src={props.img3} alt={props.title3} />
        <span>
          <h4>{props.title3}</h4>
          <p>{props.text3}</p>
          <div className={styles.prices}>
            <a
              target="__blank"
              href="https://sedackservice.compilator.com/public/cms?Id=1&CompanyId=8b3db2d2-5663-437f-9099-c3d4b8ee5825&branchId=1"
            >
              <p>{props.price3}</p>
            </a>
          </div>
          <div className={styles.buttons}>
            <BokaButton />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Text;
