import React from "react";
import liveParcelImg from "../../../assets/live-tracking.png";
import safeDeliveryImg from "../../../assets/safe-delivery.png";

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: liveParcelImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: safeDeliveryImg,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: safeDeliveryImg,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col gap-5 my-20 mx-24">
      {features.map((step, index) => (
        <div key={index} className="flex bg-white rounded-2xl p-10 gap-15">
          <div>
            <img src={step.img} alt="" />
          </div>
          <div className="flex h-30 items-center">
            <div class="border-l border-dashed border-gray-400 h-full"></div>
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="font-bold text-secondary text-xl mb-4">
                {step.title}
              </h3>
              <h5>{step.desc}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
