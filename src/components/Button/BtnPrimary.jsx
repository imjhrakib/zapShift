import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const BtnPrimary = ({ btnText }) => {
  return (
    <div className="flex items-center gap-2">
      <button className="btn bg-primary rounded-full h-11 font-bold">
        {btnText}
      </button>
      <div className="bg-black rounded-full flex -ml-2 items-center justify-center w-10 h-10">
        <IoMdArrowRoundUp
          size={20}
          className="transform rotate-45 text-primary"
        />
      </div>
    </div>
  );
};

export default BtnPrimary;
