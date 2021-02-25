import React from "react";
import DefaultInfoComponent from "../DefaultInfoComponent/DefaultInfoComponent";
import styles from "./PriceList.module.css";
import { rekondPrisLista } from "../Data/Data";
import { däckPrisLista } from "../Data/Data";

function priceList(props) {
  return (
    <div className={styles.priceList}>
      <div className={styles.topImage}></div>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Prislista
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>Däckverkstad</h2>
      {däckPrisLista.map((data, index) => {
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
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Prislista
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>Tvätt & Rekond</h2>
      {rekondPrisLista.map((data, index) => {
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

export default priceList;
