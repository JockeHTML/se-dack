import React from "react";
import DefaultInfoComponent from "../DefaultInfoComponent/DefaultInfoComponent";
import styles from "./PriceList.module.css";
import { rekondPrisLista } from "../Data/Data";
import { däckPrisLista } from "../Data/Data";

function PriceList(props) {
  return (
    <div className={styles.priceList}>
      <div className={styles.topImage}>
        <h1>PRISLISTA</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>konkurrenskraftiga priser</h1>
      </div>
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
