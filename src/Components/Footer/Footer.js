import React from "react";
import classes from "./Footer.module.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Contact />
      <div className={classes.border}>
        <h4>© 2021 SE DÄCKSERVICE AB , ALL RIGHTS RESERVED</h4>
      </div>
    </footer>
  );
};

export default Footer;
