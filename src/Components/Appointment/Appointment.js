import React from "react";
import styles from "./Appointsment.module.css";
import DefaultInfoComponent from "../DefaultInfoComponent/DefaultInfoComponent";
import { boka } from "../Data/Data";

function Appointment(props) {
  return (
    <div className={styles.appointment}>
      <div className={styles.topImage}></div>
      <h1>Bokningsbara tjänster</h1>
      <h2>Däckservice & Rekond</h2>
      {boka.map((data, index) => {
        return <DefaultInfoComponent key={index} data={data} />;
      })}
    </div>
  );
}

export default Appointment;
