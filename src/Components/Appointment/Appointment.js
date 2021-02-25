import React from "react";
import styles from "./Appointsment.module.css";
import DefaultInfoComponent from "../DefaultInfoComponent/DefaultInfoComponent";
import { boka } from "../Data/Data";

function Appointment(props) {
  return (
    <div className={styles.appointment}>
      <div className={styles.topImage}></div>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Bokningsbara tjänster
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>
        Däckservice & Rekond
      </h2>
      {boka.map((data, index) => {
        const {
          title,
          price,
          text,
          img,
          extraText,
          button,
          route,
          extraButton,
          extraRoute,
        } = data;
        return (
          <DefaultInfoComponent
            button={button}
            route={route}
            extraButton={extraButton}
            extraText={extraText}
            extraRoute={extraRoute}
            img={img}
            title={title}
            price={price}
            text={text}
          />
        );
      })}
    </div>
  );
}

export default Appointment;
