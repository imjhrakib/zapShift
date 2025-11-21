import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="pl-4">
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h3 className="text-3xl -ms-2.5">zapShift</h3>
      </div>
    </Link>
  );
};

export default Logo;
