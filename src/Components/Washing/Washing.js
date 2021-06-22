import React from "react";
import Card from "./Card";
import styles from "./Washing.module.css";
import { washData } from "../Data/Data";
import Carousel from "react-multi-carousel";
import ButtonGroup from "./button-group";

const Washing = () => {
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
    customButtonGroup: <ButtonGroup />,
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
    <div className={styles.wash}>
      <div className={styles.content}>
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
    </div>
  );
};

export default Washing;
