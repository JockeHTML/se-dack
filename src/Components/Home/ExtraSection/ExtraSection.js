import React from "react";
import styles from "./ExtraSection.module.css";
import { headerData } from "../../Data/Data";
import { Grid } from "@material-ui/core";

function ExtraSection(props) {
  return (
    <div className={styles.extraSection}>
      <Grid justify="center" container item className={styles.gridContainer}>
        {headerData.map((data, index) => {
          const { icon, title, text } = data;
          return (
            <Grid
              key={index}
              xs={12}
              md={3}
              xl={2}
              className={styles.gridItem}
              item
            >
              <i className={icon}></i>
              <h3>{title}</h3>
              <p>{text}</p>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ExtraSection;
