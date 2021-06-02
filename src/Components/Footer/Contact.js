import React from "react";
import classes from "./Contact.module.css";
import About from "./About";
import Links from "./Links";
import Links2 from "./Links2";
import OpeningHours from "./OpeningHours";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <About />
      <div className={classes.links}>
        <Links />
        <OpeningHours />
        <Links2 />
      </div>
    </div>
  );
};

export default Contact;
