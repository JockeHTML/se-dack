import React from "react";
import classes from "./About.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/bg6.png";

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
          fram emot att få hjälpa dig som privar person och företag.
        </p>
      </div>
      <div className={classes.icons}>
        <img src="./images/instagram.png" alt="instagram" />
        <img src="./images/facebook.png" alt="facebook" />
      </div>
    </div>
  );
};

export default About;
