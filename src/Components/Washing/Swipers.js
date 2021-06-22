// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./button-group.module.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.css";

// Import Swiper styles

import React from "react";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Swipers = () => {
  return (
    <div className={styles.testing}>
      <Swiper
        navigation
        pagination
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          style={{ height: "300px", width: "200px", backgroundColor: "red" }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "300px", width: "200px", backgroundColor: "blue" }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "300px", width: "200px", backgroundColor: "green" }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ height: "300px", width: "200px", backgroundColor: "grey" }}
        >
          Slide 1
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Swipers;
