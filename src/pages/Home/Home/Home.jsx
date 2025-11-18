import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="mt-6">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
