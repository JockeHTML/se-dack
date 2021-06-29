import React from "react";
import Card from "../Washing/Card";
import Content from "./Content";
import styles from "./MainServices.module.css";
import { washData } from "../Data/Data";
import { däckverkstadsData } from "../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";

const MainServices = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  return (
    <div className={styles.mainServices}>
      <div className={styles.topImage}>
        <h1>DÄCKVERKSTAD</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>SE DÄCKSERVICE AB</h4>
          <h1>Vi hjälper dig hela vägen</h1>
          <p>
            När det är dags att skifta däck bokar du enkelt en tid här på
            hemsidan. Vi kollar mönsterdjup, lufttryck och ser till att bultarna
            blir rätt åtdragna. Som bonus slipper du tunga lyft och kan i lugn
            och ro ta en kaffe i vår kundmottagning medan vi tar hand om
            däckbytet. Har du några frågor eller funderingar, tveka inte att
            kontakta oss.
          </p>
        </div>
        {däckverkstadsData.map((data, index) => {
          return <Content key={index} {...data} />;
        })}
        <div className={styles.title2}>
          <h4>DÄCKVERKSTAD</h4>
          <h1>Boka din tjänst</h1>
          <p>
            Hos oss skiftar du dina däck tryggt och säkert. Vi bjuder på kaffe
            och kaka medans du väntar.
          </p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
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
              <SwiperSlide key={index} className={styles.cardWrapper}>
                <Card {...data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MainServices;
