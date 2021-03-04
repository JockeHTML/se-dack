import React from "react";
import styles from "./Used.module.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { begagnat } from "../Data/Data";
import Button from "../Button/Button";

function Used(props) {
  return (
    <div className={styles.used}>
      <div className={styles.topImage}></div>
      <div className={styles.title}>
        <h1>Begagnat</h1>
        <h2>Däck & Fälg</h2>
        <p>
          Kontakta gärna oss så kollar vi upp däck till just din bil, aktuella
          priser och saldo.{" "}
        </p>
      </div>
      <Grid
        xl={12}
        md={6}
        xs={11}
        container
        item
        className={styles.gridContainer}
      >
        {begagnat.map((data, index) => {
          const { text, img, title } = data;
          return (
            <Grid key={index} xs={12} xl={3} item className={styles.gridItem}>
              <img src={img} alt="" />
              <h2>{title.toUpperCase()}</h2>
              <p>{text}</p>
            </Grid>
          );
        })}
      </Grid>
      <Button />
    </div>
  );
}

export default Used;
