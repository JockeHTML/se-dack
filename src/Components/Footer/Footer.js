import React from "react";
import classes from "./Footer.module.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
