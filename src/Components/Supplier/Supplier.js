import React from "react";
import styles from "./Supplier.module.css";
import { Grid } from "@material-ui/core";
import { leverantörer } from "../Data/Data";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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
      <Grid xl={5} container item className={styles.gridContainer}>
        {leverantörer.map((data, index) => {
          const { img, url } = data;
          return (
            <Grid xl={3} className={styles.gridItem} item>
              <div className={styles.image}>
                <a rel="noreferrer" target="_blank" href={url}>
                  <img src={img} alt="" />
                </a>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Supplier;
