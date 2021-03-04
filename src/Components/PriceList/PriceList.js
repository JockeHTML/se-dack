import React from "react";
import DefaultInfoComponent from "../DefaultInfoComponent/DefaultInfoComponent";
import styles from "./PriceList.module.css";
import { rekondPrisLista } from "../Data/Data";
import { däckPrisLista } from "../Data/Data";

function PriceList(props) {
  return (
    <div className={styles.priceList}>
      <div className={styles.topImage}></div>
      <h1>Prislista</h1>
      <h2>Däckverkstad</h2>
      {däckPrisLista.map((data, index) => {
        return <DefaultInfoComponent key={index} data={data} />;
      })}
      <h1>Prislista</h1>
      <h2>Tvätt & Rekond</h2>
      {rekondPrisLista.map((data, index) => {
        return <DefaultInfoComponent key={index} data={data} />;
      })}
    </div>
  );
}

export default PriceList;
