import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import BtnPrimary from "../../../components/Button/BtnPrimary";
const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src={banner1} />
        <div className="absolute left-22 bottom-19 flex">
          <BtnPrimary btnText={"Track Your Parcel"}></BtnPrimary>
        </div>
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
    </Carousel>
  );
};

export default Banner;
