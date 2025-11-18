import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewsImg from "../../../assets/customer-top.png";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-12 mb-5">
          <img src={reviewsImg} alt="" />
        </div>
        <h2 className="text-secondary text-3xl font-bold text-center">
          What our customers are sayings
        </h2>
        <h5 className="text-description max-w-7/12 mx-auto text-center mt-5 mb-8 ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </h5>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <ReviewCard review={review} key={review.id}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
