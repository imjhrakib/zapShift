import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  console.log(regions);

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const district = regionDistricts.map((d) => d.district);
    return district;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCost = isSameDistrict
          ? parcelWeight * 40
          : parcelWeight * 40 + 40;
        cost = minCharge + extraCost;
      }
    }
    console.log("cost of parcel", cost);
    data.cost = cost;
    Swal.fire({
      title: "Are you agree with the cost?",
      text: `your total cost is ${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after sending data", res.data);
          if (res.data.insertedId) {
            navigate("/dashboard/my-parcels");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel has created, please pay",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-white p-10 mt-5 rounded-2xl">
      <h2 className="text-5xl font-bold my-10">Send a Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mb-2 p-4 ">
        {/* parcel type */}
        <div className="text-black font-bold">
          <label className="label mr-7">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name,weight */}
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset ">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input p-2 w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input p-2 w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>
        {/* send details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input p-2 w-full mb-2"
              defaultValue={user?.displayName}
              placeholder="Sender Name"
            />
            {/* sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              className="input p-2 w-full mb-2"
              defaultValue={user?.email}
              placeholder="Sender Email"
            />
            {/* sender address */}
            <label className="label">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input p-2 w-full mb-2"
              placeholder="Sender Address"
            />

            {/* sender regions */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">sender region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option defaultValue={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option defaultValue={true}>Pick a District</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
          </fieldset>

          <fieldset className="fieldset">
            {/* receiver name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input p-2 w-full mb-2"
              placeholder="Receiver Name"
            />
            {/* receiver Email */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input p-2 w-full mb-2"
              placeholder="Receiver Email"
            />
            {/* receiver address */}
            <label className="label">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input p-2 w-full mb-2"
              placeholder="receiver Address"
            />
            {/* receiver regions */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">receiver region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option defaultValue={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option defaultValue={true}>Pick a District</option>
                {districtByRegion(receiverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
