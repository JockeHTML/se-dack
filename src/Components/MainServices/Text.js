import React from "react";
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles.text}>
      <h2>Lorem ipsum dolor sit amet consectetur sit amet consectetur.</h2>
      <div className={styles.card}>
        <img src="./images/testare.png" alt="" />
        <span>
          <h4>DÄCKSKIFTE</h4>
          <p>
            Medans du väntar skiftar vi dina däck. När du bokat ett däckskifte
            hos oss bör du ha med dig alla ev. extra bultar och eventuell
            låsbult. Detta för att vi ska kunna på ett snabbt och effektivt sätt
            skifta däcken.
          </p>
        </span>
      </div>
      <div className={styles.card}>
        <img src="./images/testare.png" alt="" />
        <span>
          <h4>MONTERING</h4>
          <p>
            Med hjälp av nya moderna maskiner monterar vi säkert, snabbt och med
            högsta precision alla typer av däck. Vi monterar allt från små däck
            till känsliga 24”´s hjul. Med den senaste tekniken undviker vi så
            kallade monteringsskador som lätt kan uppstå då dagens däck blir
            allt känsligare.
          </p>
        </span>
      </div>
      <div className={styles.card}>
        <img src="./images/testare.png" alt="" />
        <span>
          <h4>BALANSERING</h4>
          <p>
            Med hjälp av moderna maskiner balanserar vi dina hjul så du slipper
            obalans i hjul, ratt och bil.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Text;
