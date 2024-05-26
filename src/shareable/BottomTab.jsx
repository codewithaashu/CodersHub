import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa6";
import { IoHome, IoNotificationsSharp } from "react-icons/io5";

const BottomTab = () => {
  return (
    <>
      <div
        className="md:hidden flex flex-row w-full justify-around border-t-[1px] p-2 py-3 absolute bottom-0 bg-background"
        style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px -3px 10px" }}
      >
        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <IoHome className="text-lg" />
          <label className="text-[13px]">Home</label>
        </div>
        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <FaBriefcase className="text-lg" />
          <label className="text-[13px]">Jobs</label>
        </div>

        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <FaLaptopCode className="text-lg" />
          <label className="text-[13px]">Coding</label>
        </div>
        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <CgNotes className="text-lg" />
          <label className="text-[13px]">Notes</label>
        </div>
        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <IoNotificationsSharp className="text-lg" />
          <label className="text-[13px]">Notification</label>
        </div>
      </div>
    </>
  );
};

export default BottomTab;
