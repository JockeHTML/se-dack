import React from "react";
import classes from "./Text.module.css";

const Text = () => {
  return (
    <div className={classes.text}>
      <h2>Kiropraktik, Massage & Fotbäddar</h2>
      <h4>
        Information gällande våra behandlingar och för att boka tid klickar du
        på länkarna nedan. Men först! Läs igenom nedanstående information innan
        du bokar din tid.
      </h4>
      <ul>
        <li>Tidsbokning sker via internet eller telefon</li>
        <li>
          Generösa öppettider och möjlighet till akuttider nästan dagligen
        </li>
        <li>Betalning sker via kort eller kontant</li>
        <li>Fakturering endast till företag eller enligt överenskommelse</li>
        <li>Ej avbokat besök samt sen avbokning debiteras</li>
        <li>
          Avbokning skall ske senast 12 timmar innan, via mejl eller telefon
        </li>
      </ul>
    </div>
  );
};

export default Text;
