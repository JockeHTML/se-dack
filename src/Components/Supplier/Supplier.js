import React from "react";
import styles from "./Supplier.module.css";
import { Grid } from "@material-ui/core";
import { leverantörer } from "../Data/Data";
import Button from "../Button/Button";

function Supplier(props) {
  return (
    <div className={styles.supplier}>
      <div className={styles.topImage}></div>
      <h1>Våra Leverantörer</h1>
      <h2>Däck, Fälg & Rekond</h2>
      <Grid
        md={12}
        xs={12}
        xl={6}
        container
        item
        className={styles.gridContainer}
      >
        {leverantörer.map((data, index) => {
          const { img, url } = data;
          return (
            <Grid
              key={index}
              md={4}
              xs={6}
              xl={3}
              className={styles.gridItem}
              item
            >
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
