import React, { useEffect } from "react";
import styles from "./Supplier.module.css";
import { Grid } from "@material-ui/core";
import { leverantörer } from "../Data/Data";
import Aos from "aos";
import "aos/dist/aos.css";

function Supplier(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.supplier}>
      <div className={styles.topImage}>
        <h1>LEVERANTÖRER</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE Däckservice AB</h4>
          <h1>Vi samarbetar med</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, ut?
            Explicabo non ullam porro debitis soluta quia numquam ratione
            laborum.
          </p>
        </div>
        <Grid
          data-aos="fade-up"
          md={12}
          xs={12}
          lg={7}
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
                lg={3}
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
      </div>
    </div>
  );
}

export default Supplier;
