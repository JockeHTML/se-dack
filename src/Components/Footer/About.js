import React from "react";
import classes from "./About.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="sedäck logo" />
          </Link>
        </div>
        <p>
          Vi hjälper dig med allt inom däck, fälg och rekond. Vi på SE Däck ser
          fram emot att få hjälpa dig både som privat person och företag.
        </p>
      </div>
      <div className={classes.icons}>
        <a target="__blank" href="https://www.instagram.com/sedackserviceab/">
          {" "}
          <img src="./images/instagram.png" alt="instagram" />
        </a>
        <a target="__blank" href="https://www.facebook.com/sedackserviceab">
          {" "}
          <img src="./images/facebook.png" alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default About;
