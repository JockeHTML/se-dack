import React, { useState } from "react";
import styles from "./SectionThree.module.css";
import Card from "../../Washing/Card";
import { däckData } from "../../Data/Data";
import { washData } from "../../Data/Data";
import Carousel from "react-multi-carousel";

import ButtonGroup from "./ButtonGroup";

function SectionThree(props) {
  const [active, setActive] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const sliderParams = {
    responsive: responsive,
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    showDots: false,
    sliderClass: "",
  };

  return (
    <div className={styles.sectionThree}>
      <div className={styles.title}>
        <div className={styles.subTitle}>
          {" "}
          <p>TJÄNSTER</p>
        </div>
        <h1>Populära tjänster</h1>
      </div>
      <ButtonGroup active={active} setActive={setActive} />
      {active ? (
        <div className={styles.cards}>
          <Carousel {...sliderParams}>
            {washData.map((data, index) => {
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
          </Carousel>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default SectionThree;
