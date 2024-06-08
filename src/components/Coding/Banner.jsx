import React from "react";
import banner from "../../assets/codingBanner.png";
const Banner = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly w-full items-center flex-wrap p-5 md:px-0 gap-3 bg-muted ">
        <div className="flex flex-col gap-1 order-2 md:order-1">
          <div className="hidden md:flex text-xl md:text-3xl font-semibold ">
            Explore DSA Sheet & <br /> Boost your DSA Skills at a next level.
          </div>
          <div className="flex md:hidden text-xl md:text-3xl font-semibold text-center">
            Explore DSA Sheet & Boost your DSA Skills at a next level.
          </div>
          <p className="text-sm font-normal text-muted-foreground text-center">
            Keep a track of problems. Covers almost every concept of DSA,
            generally asked in{" "}
            <span className="text-[#1d4ed8] font-medium">
              your dream company.
            </span>
          </p>
        </div>
        <div className="order-1 md:order-2 md:h-[270px] h-52">
          <img src={banner} alt="Banner" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default Banner;
