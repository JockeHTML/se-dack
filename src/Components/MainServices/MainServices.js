import React from "react";
import Card from "../Washing/Card";
import Content from "./Content";
import styles from "./MainServices.module.css";
import { däckData } from "../Data/Data";
import { däckverkstadsData } from "../Data/Data";

function MainServices(props) {
  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCKVERKSTAD</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Vi Hjälper Dig Hela Vägen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            debitis. Soluta corporis ipsam, nemo tenetur possimus quas totam
            sunt sed.
          </p>
        </div>
        {däckverkstadsData.map((data, index) => {
          const {
            headingImg,
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
        <div className={styles.title}>
          <h4>DÄCKVERKSTAD</h4>
          <h1>Boka Din Tjänst</h1>
          <p>
            Hos oss skiftar du dina däck tryggt och säkert. Vi bjuder på kaffe
            och kaka medans du väntar.
          </p>
        </div>
        <div className={styles.cards}>
          {däckData.map((data, index) => {
            const { title, price, one, two, three, four, time } = data;
            return (
              <Card
                key={index}
                title={title}
                price={price}
                one={one}
                two={two}
                three={three}
                four={four}
                time={time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainServices;
