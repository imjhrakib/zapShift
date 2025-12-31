import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaUserCheck, FaUsers } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaTrashCan, FaUsersViewfinder } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateStatus = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateStatus).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };
  const handleDelete = (rider) => {
    axiosSecure.delete(`/riders/${rider._id}/role`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider application deleted successfully`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div>
      <h2>Approve riders : {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.riderDistrict}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : "text-red-600"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>
                <td>
                  <button className="btn">
                    <FaEye />
                  </button>
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn"
                  >
                    <IoPersonRemove />
                  </button>
                  <button onClick={() => handleDelete(rider)} className="btn">
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
