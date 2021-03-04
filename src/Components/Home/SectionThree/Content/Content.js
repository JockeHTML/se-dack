import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./Content.module.css";
import { sectionThree } from "../../../Data/Data";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";

function Content(props) {
  return (
    <>
      <Grid xl={12} md={12} container item className={styles.gridContainer}>
        {sectionThree.map((data, index) => {
          const { title, text } = data;
          return (
            <Grid
              key={index}
              xs={9}
              md={4}
              xl={2}
              item
              className={styles.gridItem}
            >
              <img src="" alt="" />
              <h2>{title.toUpperCase()}</h2>
              <p>{text.slice(0, 100) + "..."}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="/priceList">
                Läs mer..
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Button />
    </>
  );
}

export default Content;
