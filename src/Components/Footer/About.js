import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h2>SE Däckservice AB</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        dolores laudantium numquam, architecto illum qui doloremque!
      </p>
      <div className={classes.icons}>
        <img src="./images/instagram.png" alt="instagram" />
        <img src="./images/facebook.png" alt="facebook" />
      </div>
    </div>
  );
};

export default About;
