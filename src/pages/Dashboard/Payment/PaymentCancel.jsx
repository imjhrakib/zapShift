import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div>
      <h2>Payment Cancelld </h2>
      <Link to={"/dashboard/my-parcels"}>
        <button className="btn btn-primary text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancel;
