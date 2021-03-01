import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./DefaultInfoComponent.module.css";
import { AppContext } from "../Context/Context";

function DefaultInfoComponent({ data }) {
  const { title, price, button, img, text, route } = data;
  const { setSaveText } = useContext(AppContext);

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
              <Link to="/moreInfo" onClick={() => setSaveText(data)}>
                Läs mer
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

export default DefaultInfoComponent;
