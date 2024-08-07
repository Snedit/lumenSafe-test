import React from "react";

// import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32" /> */}
        <p className="text-3xl sm:text-5xl text-white text-gradient py-1">LumenSafe</p>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">G-I-T-H-U-B IN WEB3</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">BUILD WITH LOVE AND ENJOYMENT IN PEAK HACKATHON 2K24</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">THE GOODMAN CODES</p>
      <p className="text-white text-right text-xs">PEAK HACKATHON</p>
    </div>
  </div>
);

export default Footer;