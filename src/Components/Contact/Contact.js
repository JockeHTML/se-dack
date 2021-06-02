import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { kontakt } from "../Data/Data";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h4>Kontakta oss</h4>
        <h1>Hör av dig till oss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          at eius exercitationem amet inventore pariatur asperiores natus
          laudantium iure.
        </p>
      </div>
      <div className={styles.content}>
        {kontakt.map((data, index) => {
          const { title, text, icon, text2 } = data;
          return (
            <div data-aos="fade-up" key={index} className={styles.card}>
              {" "}
              <img src={icon} alt="{title}" />
              <div className={styles.text}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{text2}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1848.654270655591!2d17.34618461625139!3d62.39696546840194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46646736fad67cd3%3A0xdfde11c0f5d7d352!2sSE%20D%C3%A4ckservice%20AB%20(First%20Stop%20Sundsvall)!5e0!3m2!1ssv!2sse!4v1614159619229!5m2!1ssv!2sse"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </div>
  );
}

export default Contact;
