import React, { useEffect, useContext } from "react";
import Contact from "../Contact/Contact";
import Content from "../Home/SectionTwo/Content/Content";
import styles from "./AllServices.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/Context";

const AllServices = () => {
  const { loading, loadingFunction } = useContext(AppContext);
  useEffect(() => {
    loadingFunction();
  }, []);

  console.log(document);

  return (
    <div className={styles.allServices}>
      <div className={styles.topImage}>
        <h1>TJÄNSTER</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Rätt tjänst för dig</h1>
          <p>
            Endast nöjda kunder är lojala kunder. Vår servicekvalitet är inte
            bara tomma ord, det är en del av vårt företags DNA. Vårt primära mål
            är att göra våra kunder nöjda och garantera att det stannar kvar hos
            oss som kunder. Av detta skäl erbjuder vi en vänlig service,
            personlig rådgivning och stor flexibilitet.
          </p>
        </div>

        <Content />
      </div>
      <Contact />{" "}
    </div>
  );
};

export default AllServices;
