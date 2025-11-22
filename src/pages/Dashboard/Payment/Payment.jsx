import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();

  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  const handlePayment = async () => {
    const paymentInfo = {
      parcelId: parcel._id,
      parcelName: parcel.parcelName,
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  return (
    <div>
      <h2 className="text-black">
        Please pay ${parcel.cost} for : {parcel.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-white">
        pay
      </button>
    </div>
  );
};

export default Payment;
