import React from "react";
import serviceImg from "../../../assets/service.png";

const serviceSteps = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
  {
    id: 2,
    title: "NationWide Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
  {
    id: 6,
    title: "Parcel Return",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: serviceImg,
  },
];

const OurServices = () => {
  return (
    <div className="bg-secondary py-10 rounded-2xl">
      <div className="text-center">
        <h1 className="text-3xl text-white font-bold mb-5">Our Services</h1>
        <h4 className="text-[#DADADA] max-w-1/2 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-4 px-15 mt-10 text-center">
        {serviceSteps.map((step) => (
          <div className="bg-white p-7 rounded-2xl flex items-center flex-col">
            <img src={step.img} alt="" />

            <h3 className="font-bold my-2.5 text-xl max-w-8/12">
              {step.title}
            </h3>

            <h5 className="text-description">{step.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
