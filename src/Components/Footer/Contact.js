import React from "react";
import classes from "./Contact.module.css";
import About from "./About";
import Links from "./Links";
import OpeningHours from "./OpeningHours";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <About />
      <Links />
      <Links />
      <OpeningHours />
    </div>
  );
};

export default Contact;
