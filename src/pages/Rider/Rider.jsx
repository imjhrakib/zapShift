import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Rider = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const riderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const district = regionDistricts.map((d) => d.district);
    return district;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-4xl">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mb-2 p-4 "
      >
        {/* Rider details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Tell Us About Yourself</h4>
            {/* Rider name */}
            <label className="label text-black text-sm">Your Name</label>
            <input
              type="text"
              {...register("riderName")}
              className="input p-2 w-full mb-2"
              placeholder="Your Name"
            />
            {/* rider driving License */}
            <label className="label text-black text-sm ">
              Driving License Number
            </label>
            <input
              type="text"
              {...register("riderEmail")}
              className="input p-2 w-full mb-2"
              placeholder="Driving License Number"
            />
            {/* rider Email */}
            <label className="label  text-black text-sm">Your Email</label>
            <input
              type="text"
              {...register("riderEmail")}
              className="input p-2 w-full mb-2"
              defaultValue={user?.email}
              placeholder="Your Email"
            />

            {/* Rider regions */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Select Your Region"
                className="select w-full"
              >
                <option defaultValue={true}>Select Your Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* rider district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your District</legend>
              <select
                {...register("riderDistrict")}
                defaultValue="Select Your District"
                className="select w-full"
              >
                <option defaultValue={true}>Select Your District</option>
                {districtByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset">
              {/* Rider NID */}
              <label className="label text-black text-sm">NID No</label>
              <input
                type="text"
                {...register("riderNid")}
                className="input p-2 w-full mb-2"
                placeholder="Your NID"
              />
              {/* Rider Phone Number */}
              <label className="label text-black text-sm">Phone Number</label>
              <input
                type="text"
                {...register("riderPhoneNumber")}
                className="input p-2 w-full mb-2"
                placeholder="Your Phone Number"
              />
              {/* bike brand and year */}
              <label className="label text-black text-sm">
                Bike Brand Model and Year
              </label>
              <input
                type="text"
                {...register("riderBikeModel")}
                className="input p-2 w-full mb-2"
                placeholder="Bike Brand Model and Year"
              />
              {/* bike registration number*/}
              <label className="label text-black text-sm">
                Bike Brand Model and Year
              </label>
              <input
                type="text"
                {...register("bikeRegistrationNumber")}
                className="input p-2 w-full mb-2"
                placeholder="Bike Registration Number"
              />
              <label className="label text-black text-sm">
                Tell Us About Yourself
              </label>
              <input
                type="text"
                {...register("riderInfo")}
                className="input p-2 w-full mb-2"
                placeholder="Tell us about yourself"
              />
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

export default Rider;
