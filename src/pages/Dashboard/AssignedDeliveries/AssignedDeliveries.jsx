import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId,
    };
    let message = `Parcel status has been updated with ${status
      .split("_")
      .join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl text-black">
        Parcels Pending Pickup: {parcels.length}{" "}
      </h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Parcel Name</th>
            <th>Confirm</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td>{parcel.parcelName}</td>
              <td>
                {parcel.deliveryStatus === "driver_assigned" ? (
                  <>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "rider_arriving")
                      }
                      className="btn btn-primary text-black"
                    >
                      Accept
                    </button>
                    <button className="btn btn-warning ms-2.5 text-black">
                      Reject
                    </button>
                  </>
                ) : (
                  <span>Accepted</span>
                )}
              </td>
              <td>
                {
                  <>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "parcel_pickedUp")
                      }
                      className="btn btn-primary text-black"
                    >
                      Mark as Picked Up
                    </button>
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                      }
                      className="btn btn-warning ms-2.5 text-black"
                    >
                      Mark as delivered
                    </button>
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedDeliveries;
