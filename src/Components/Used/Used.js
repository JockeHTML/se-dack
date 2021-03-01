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
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0" }}
      >
        Begagnat
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>Däck & Fälg</h2>
      <p>
        Kontakta gärna oss så kollar vi upp däck till just din bil, aktuella
        priser och saldo.{" "}
      </p>
      <Grid container item className={styles.gridContainer}>
        {begagnat.map((data, index) => {
          const { text, img, title } = data;
          return (
            <Grid key={index} xl={3} item className={styles.gridItem}>
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
