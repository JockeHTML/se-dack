import React, { useState } from "react";
import styles from "./SectionThree.module.css";
import Card from "../../Washing/Card";
import { däckData } from "../../Data/Data";
import { washData } from "../../Data/Data";
import ButtonGroup from "./ButtonGroup";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";

function SectionThree(props) {
  SwiperCore.use([Pagination]);
  const [active, setActive] = useState(false);

  return (
    <div className={styles.sectionThree}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.subTitle}>
            {" "}
            <p>TJÄNSTER</p>
          </div>
          <h1>Populära tjänster</h1>
        </div>
        <ButtonGroup active={active} setActive={setActive} />
        {active ? (
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {washData.map((data, index) => {
              return (
                <SwiperSlide key={index} className={styles.cardWrapper}>
                  <Card {...data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
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
                spaceBetween: 30,
              },
            }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {däckData.map((data, index) => {
              return (
                <SwiperSlide key={index} className={styles.cardWrapper}>
                  <Card {...data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default SectionThree;
