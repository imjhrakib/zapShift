import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonImg from "../../../assets/brands/amazon_vector.png";
import amazonVecImg from "../../../assets/brands/amazon.png";
import casioImg from "../../../assets/brands/casio.png";
import moonstarImg from "../../../assets/brands/moonstar.png";
import randstadImg from "../../../assets/brands/randstad.png";
import starImg from "../../../assets/brands/star.png";
import startPeopleImg from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const brandsLogos = [
  amazonImg,
  amazonVecImg,
  casioImg,
  moonstarImg,
  randstadImg,
  starImg,
  startPeopleImg,
];

const Brands = () => {
  return (
    <div>
      <h1 className="text-secondary text-center font-bold text-2xl my-8">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
