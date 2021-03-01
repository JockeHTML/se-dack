import React from "react";
import styles from "./Supplier.module.css";
import { Grid } from "@material-ui/core";
import { leverantörer } from "../Data/Data";
import Button from "../Button/Button";

function Supplier(props) {
  return (
    <div className={styles.supplier}>
      <div className={styles.topImage}></div>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Våra Leverantörer
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>
        Däck, Fälg & Rekond
      </h2>
      <Grid xl={6} container item className={styles.gridContainer}>
        {leverantörer.map((data, index) => {
          const { img, url } = data;
          return (
            <Grid key={index} xl={3} className={styles.gridItem} item>
              <div className={styles.image}>
                <a rel="noreferrer" target="_blank" href={url}>
                  <img src={img} alt="" />
                </a>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Button />
    </div>
  );
}

export default Supplier;
