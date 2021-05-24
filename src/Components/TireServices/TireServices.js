import React from "react";
import Content from "../MainServices/Content";
import styles from "./TireServices.module.css";
import { däckOchFälgData } from "../Data/Data";
import Contact from "../Contact/Contact";

function TireServices(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCK & FÄLG</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>Vi hjälper dig hela vägen</h1>
        <p>
          Vi erbjuder däck & fälg till alla bilar i olika prisklasser. Vi jobbar
          tillsammans med välkända och pålitliga leverantörer som Bridgestone,
          Nokian, Specialfälgar, OCL Brorssons & Rautamo. Vänligen kontaka oss
          så tar vi tillsammans fram något som passar just dig och din bil.
        </p>
      </div>
      {däckOchFälgData.map((data, index) => {
        const {
          img2,
          img3,
          img,
          title,
          text,
          heading,
          title2,
          text2,
          title3,
          text3,
        } = data;
        return (
          <Content
            img2={img2}
            img3={img3}
            img={img}
            title2={title2}
            text2={text2}
            title3={title3}
            text3={text3}
            title={title}
            text={text}
            heading={heading}
          />
        );
      })}

      <Contact />
    </div>
  );
}

export default TireServices;
