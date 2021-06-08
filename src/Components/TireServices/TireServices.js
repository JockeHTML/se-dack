import React, { useEffect, useContext } from "react";
import Content from "../MainServices/Content";
import styles from "./TireServices.module.css";
import { däckOchFälgData } from "../Data/Data";
import Contact from "../Contact/Contact";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/Context";

const TireServices = () => {
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
            <h1>DÄCK & FÄLG</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <h4>SE DÄCKSERVICE AB</h4>
              <h1>Rätt lösning till din bil</h1>
              <p>
                Vi erbjuder däck & fälg till alla bilar i olika prisklasser. Vi
                jobbar tillsammans med välkända och pålitliga leverantörer som
                Bridgestone, Nokian, Specialfälgar, OCL Brorssons & Rautamo.
                Vänligen kontaka oss så tar vi tillsammans fram något som passar
                just dig och din bil.
              </p>
            </div>
            {däckOchFälgData.map((data, index) => {
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

export default TireServices;
