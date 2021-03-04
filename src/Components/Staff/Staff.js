import React from "react";
import styles from "./Staff.module.css";
import { personal } from "../Data/Data";
import { Grid } from "@material-ui/core";
import Button from "../Button/Button";

function Staff(props) {
  return (
    <div className={styles.staff}>
      <h1>Vi som jobbar här</h1>
      <h2>Kontor, Verkstad & Rekond</h2>
      <Grid
        justify="center"
        xs={12}
        md={12}
        xl={12}
        className={styles.gridContainer}
        container
        item
      >
        {personal.map((data, index) => {
          const { title, text, text2, img } = data;
          return (
            <Grid
              item
              key={index}
              md={4}
              xs={12}
              xl={2}
              className={styles.gridItem}
            >
              <div className={styles.image}>
                <img src={img} alt="" />
              </div>
              <div className={styles.text}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{text2}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Button />
    </div>
  );
}

export default Staff;
