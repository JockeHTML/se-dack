import React from "react";
import Content from "../MainServices/Content";
import styles from "./TireServices.module.css";
import { däckOchFälgData } from "../Data/Data";
import Contact from "../Contact/Contact";

const TireServices = () => {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCK & FÄLG</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Nytt & Begagnat</h1>
          <p>
            Vi erbjuder däck & fälg till alla bilar i olika prisklasser. Vi
            jobbar tillsammans med välkända och pålitliga leverantörer som
            Bridgestone, Nokian, Specialfälgar, OCL Brorssons & Rautamo.
            Vänligen kontaka oss så tar vi tillsammans fram något som passar
            just dig och din bil.
          </p>
        </div>
        {däckOchFälgData.map((data, index) => {
          return <Content headingImg={data.headingImg} key={index} {...data} />;
        })}
      </div>
      <Contact />
    </div>
  );
};

export default TireServices;
