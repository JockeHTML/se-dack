import React, { useEffect } from "react";
import styles from "../WashingServices/Text.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.text}>
      <div data-aos="fade-up" className={styles.content}>
        <div className={styles.info}>
          <div className={styles.title}>
            <h2>Tips & Råd</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <p>
            Kontrollera regelbundet däcktryck och hur däcken slits. Det kan
            påvisa att något är fel på bilen. Fel däcktryck påverkar bilens
            köregenskaper och däckens livslängd. De rätta däcktrycket för olika
            sorters belastning finner du i bilens instruktionsbok. Ha gärna lite
            högre däcktryck än vad instruktionsboken anger. Ett däck får aldrig
            repareras när det sitter kvar på fälgen. Tänk på att däcket kan
            explodera. Förvara däcken skyddade från solljus på en torr och sval
            plats. Säsongsförvara gärna däcken hos oss. Undvik att använda däck
            med olika mönster och typ samtidigt på en bil.
          </p>
          <br />
          <p>
            Om du kör dubb-däck på vintern, måste alla däck vara dubbade. Se
            till att de däck som sitter på samma axel har samma slitage. Montera
            alltid de däck som är minst slitna baktill, oberoende om bilen är
            fram-, bak- eller fyrhjulsdriven. För nya dubbdäck rekommenderas en
            inkörning under de första 20-30 milen för att dubbarna skall "sätta
            sig" rätt i sina hål. Samma inkörningssträcka gäller även begagnade
            vinterdäck.
          </p>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Byt till sommardäck senast den 15 april</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>1 december till och med 31 mars är det krav på vinterdäck.</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>1 oktober till 15 april får dubbdäck användas</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>
                15 april till 1 oktober råder förbud mot användning av dubbdäck.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.subInfo}>
          <div className={styles.first}>
            {" "}
            <h2>Rätt däck</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Vi rekommenderar att du aldrig ska köra på dubbfria vinterdäck på
              sommaren, så kallade "åretruntdäck". Vinterdäck har mönster och
              gummiblandning som är anpassade för att fungera när det är kallt,
              blött och vinterväglag. På sommaren ger dubbfria vinterdäck sämre
              grepp, längre bromssträcka, kortare livslängd och försämrad
              stabilitet vid en undanmanöver.
            </p>
          </div>
          <div className={styles.second}>
            {" "}
            <h2>Mönsterdjup</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Vi rekommenderar att du byter dina sommardäck när du har ett
              mönsterdjup på 3 mm eller mindre och att du byter dina vinterdäck
              när du har 5 mm eller mindre. Mät mönsterdjupet med ett
              femkronorsmynt. Avståndet mellan siffran 5 och kanten på myntet är
              3 mm. Sommardäcken är olagliga när de slits under 1,6 mm (när det
              är krav på vinterdäck gäller minst 3 mm).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
