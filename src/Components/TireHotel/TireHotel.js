import React, { useContext, useEffect } from "react";
import Content from "../MainServices/Content";
import styles from "./TireHotel.module.css";
import Contact from "../Contact/Contact";
import { dackHotellData } from "../Data/Data";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/Context";

const TireHotel = () => {
  const { loading, loadingFunction } = useContext(AppContext);
  useEffect(() => {
    loadingFunction();
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <ClipLoader color="#e6192e" loading={loading} size={150} />
        </div>
      ) : (
        <div className={styles.mainServices}>
          <div className={styles.topImage}>
            <h1>DÄCKHOTELL</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>SE DÄCKSERVICE AB</h4>
              <h1>Boka din plats</h1>
              <p>
                Förvara dina hjul hos oss, enkelt och bekvämt. Vi förvarar
                samtliga hjul i vårt nybyggda däckhotell och kan garantera att
                dina hjul förvaras på ett korrekt sätt.
              </p>
            </div>
            {dackHotellData.map((data, index) => {
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
                headingImg,
              } = data;
              return (
                <Content
                  headingImg={headingImg}
                  key={index}
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
          </div>
          <Contact />
        </div>
      )}
    </>
  );
};

export default TireHotel;
