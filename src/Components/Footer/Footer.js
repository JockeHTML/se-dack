import React from "react";
import classes from "./Footer.module.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Contact />
      <div className={classes.border}>
        <p>
          {new Date().getFullYear()} SE DÄCKSERVICE AB , ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
