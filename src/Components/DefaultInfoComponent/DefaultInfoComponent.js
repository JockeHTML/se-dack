import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./DefaultInfoComponent.module.css";

function defaultInfoComponent({
  title,
  text,
  img,
  price,
  extraText,
  button,
  route,
  extraButton,
  extraRoute,
}) {
  return (
    <Grid className={styles.gridContainer} container item>
      <Grid className={styles.gridItem} item xl={8}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>{title.toUpperCase()}</h2>
            <span>
              <h3>Från {price}</h3>
            </span>

            <div className={styles.headingBtn}>
              <Link
                to={{ pathname: route }}
                target={button.length > 8 ? "_self" : "_blank"}
              >
                {button}
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <img src={img} alt="" />
          </div>
          <div className={styles.text}>
            <h2>{title.toUpperCase()}</h2>
            <p>{text}</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default defaultInfoComponent;
