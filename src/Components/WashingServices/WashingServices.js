import React from "react";
import Content from "../MainServices/Content";
import styles from "./WashingServices.module.css";
import { tvattOchRekondData } from "../Data/Data";
import Washing from "../Washing/Washing";
import Text from "./Text";
import SmallSlider from "../Home/SmallSlider/SmallSlider";

function TireServices(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>TVÄTT & REKOND</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>Få din bil fräsch igen</h1>
        <p>
          Vår tvätt & rekond finns tillgänglig för dig året om. Vi utför allt
          ifrån enklare tvättare till hel rekonditionering och
          lackförseglningar, kontakta oss gärna om du har några speciella
          önskemål.
        </p>
      </div>
      <div className={styles.content}>
        {tvattOchRekondData.map((data, index) => {
          return <Content key={index} {...data} />;
        })}

        <Text />
      </div>
      <SmallSlider />
      <div className={styles.title}>
        <h4>TVÄTT & REKOND</h4>
        <h1>Boka din tid</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, ut?
          Explicabo non ullam porro debitis soluta quia numquam ratione laborum.
        </p>
      </div>

      <Washing />
    </div>
  );
}

export default TireServices;
