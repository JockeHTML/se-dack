import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { appointmentData } from "../../data";
import classes from "./Appointment.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import List from "./List";
import Price from "./Price";
import Button from "./Button";
import Text from "./Text";

export default function Appointment() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.appointment}>
      <div className={classes.title}>
        <h1>
          Boka <span>din</span> behandling
        </h1>
        <h4>
          För att boka tid klickar du på länken nedan. Läs igenom nedanstående
          information först.
        </h4>
      </div>
      <Text />
      <Grid
        data-aos="fade-up"
        lg={10}
        justify="center"
        container
        item
        spacing={4}
      >
        {appointmentData.map((data, index) => {
          const { title, text, price } = data;
          return (
            <Grid key={index} item lg={3}>
              <Paper className={classes.paper}>
                <div className={classes.image}>
                  <img src="./images/booking.png" alt="" />
                </div>
                <h3>{title}</h3>
                <ul>
                  {text.map((data, index) => {
                    return <List key={index} text={data.text} />;
                  })}
                </ul>
                <Price price={price} />
                <Button />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
