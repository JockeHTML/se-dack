import React from "react";
import Card from "./Card";
import styles from "./Washing.module.css";
import { washData } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";

const Washing = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  return (
    <div className={styles.wash}>
      <div className={styles.content}>
        <Swiper
          pagination={true}
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {washData.map((data, index) => {
            return (
              <SwiperSlide>
                <Card key={index} {...data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Washing;
