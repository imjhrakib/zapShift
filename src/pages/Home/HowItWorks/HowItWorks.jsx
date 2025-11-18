import React from "react";
import bookingImg from "../../../assets/bookingIcon.png";
import "../../../../src/index.css";
const steps = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    img: bookingImg,
  },
  {
    id: 2,
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    img: bookingImg,
  },
  {
    id: 3,
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    img: bookingImg,
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    img: bookingImg,
  },
];

const HowItWorks = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold">How it works</h1>
      <div className="grid grid-cols-4 my-10 gap-4">
        {steps.map((step) => (
          <div className="bg-white p-7 rounded-xl">
            <img src={step.img} alt="" />
            <h3 className="font-bold my-2.5">{step.title}</h3>
            <h5 className="text-description">{step.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
