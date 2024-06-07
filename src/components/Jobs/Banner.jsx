import React from "react";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly w-full items-center flex-wrap px-5 md:px-0">
        <div className="flex flex-col gap-2 order-2 md:order-1">
          <div className="text-xl md:text-3xl font-semibold text-center">
            Find Your Dream Job & <br /> Internship with Ease
          </div>
          <p className="text-sm font-normal text-muted-foreground text-center">
            Apply to Job/Internship that fits your career aspirations.
          </p>
        </div>
        <div className="order-1 md:order-2 h-64">
          <img src={banner} alt="Banner" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default Banner;
