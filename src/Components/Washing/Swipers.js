// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./button-group.module.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.css";
import Card from "./Card";
import { washData } from "../Data/Data";
import "./styles.css";

// Import Swiper styles

import React from "react";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Swipers = () => {
  return (
    <div className={styles.testing}>
      <Swiper navigation pagination spaceBetween={20} slidesPerView={1}>
        {washData.map((data, index) => {
          const { title, price, one, two, three, four, time } = data;

          return (
            <SwiperSlide style={{ width: "300px", margin: "0" }}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swipers;
