import React from "react";
import Content from "../MainServices/Content";
import styles from "../TireServices/TireServices.module.css";
import { tvattOchRekondData } from "../Data/Data";
import Washing from "../Washing/Washing";
import Text from "./Text";
import SmallSlider from "../Home/SmallSlider/SmallSlider";

function TireServices(props) {
  return (
    <div
      style={{ paddingBottom: "var(--padding8)" }}
      className={styles.mainServices}
    >
      <div className={styles.topImage}>
        <h1>TVÄTT & REKOND</h1>
      </div>
      <div className={styles.title}>
        <h4>SE DÄCKSERVICE AB</h4>
        <h1>Få din bil fräsch igen</h1>
        <p>
          Vår tvätt & rekond finns tillgänglig för dig hela året. Kontakta oss
          gärna om du har några speciella önskemål!
        </p>
      </div>
      {tvattOchRekondData.map((data, index) => {
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
      <Text />
      <SmallSlider />
      <div className={styles.title}>
        <h4>TVÄTT & REKOND</h4>
        <h1 style={{ marginBottom: "1rem" }}>Boka din tid</h1>
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
