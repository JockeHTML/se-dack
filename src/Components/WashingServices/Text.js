import React, { useEffect } from "react";
import styles from "./Text.module.css";
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
            <h2>LACKFÖRSEGLING</h2>
            <h4>Matrix Black NordicSilox 5D</h4>
          </div>
          <p>
            Matrix Black NordicSilox 5D är ett 9h keramiskt lackskydd med en
            8-års eller 24000 mils beständighet, extrem vattenavvisning med en
            120° kontaktvinkel och 700°C värmebeständighet. MATRIX NORDICSILOX
            är en produktserie med keramiska lackskydd som utvecklats med hjälp
            av den absolut senaste teknologin. Produkterna möjliggör att hålla
            din bil i nyskick längre, då de förbättrar varje detalj i lacken,
            allt ifrån ett ökat färgdjup till en fantastisk glans och lyster.
            Speciellt framtagna och noggrant testade av kemister med
            expertkunskap, möter produkterna kraven som ställs av såväl erfarna
            rekonditioneringsproffs som fordonsentusiaster.
          </p>
          <br />
          <p>
            MATRIX keramiska lackskydd levererar oöverträffat resultat. Med upp
            till 8 års beständighet är det inget annat keramiskt lackskydd som
            kan svara upp när det gäller prestanda. MATRIX keramiska lackskydd
            ger ett skydd mot väder och vind, avnötning, temperatur, kemikalier
            och föroreningar genom att kraftigt binda mot ytan vilket förhindrar
            att det smälter, krackelerar eller försvinner.
          </p>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Mycket långvarig effekt – 8 år (eller 24000 mil)</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Värmebeständig (700°C)</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Extrem vattenavvisning (120° kontaktvinkel)</p>
            </li>
          </ul>
        </div>
        <div className={styles.subInfo}>
          <div className={styles.first}>
            {" "}
            <h2>INVÄNDIG REKOND</h2>
            <h4>Matrix Black NordicSilox 5D</h4>
            <p>
              Vid invändig rekond ingår bl.a dammsugning av kupé och
              bagageutrymme, tvätt av mattor, rengöring av dörrkarmar, klädsel
              och fack. När insidan av bilens alla skrymslen och vrår är väl
              rengjorda, impregnerar vi plast och klädsel för längre hållbarhet.
              Vi utför även en Motortvätt på din bil. Avslutningsvis putsas
              samtliga fönster.
            </p>
          </div>
          <div className={styles.second}>
            {" "}
            <h2>HEL REKOND</h2>
            <h4>Matrix Black NordicSilox 5D</h4>
            <p>
              Med helrekond utför vi en in- & utvändig rekond. Förutom stegen i
              en invändig rekond handtvättas bilen utvändigt för att få bort
              smuts och beläggningar från väder, grus, vägsalt m.m. Vi spolar
              även dina hjulhus rena. Detta sker alltid för hand då vi vill
              garantera en skonsam och noggrann tvätt. När bilen är ren
              maskinpolerar vi den och lägger på ett vaxlager. Detta gör att
              smutsen som din bil utsätts för dagligen har svårare att fästa,
              som på längre sikt medföra slitage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
