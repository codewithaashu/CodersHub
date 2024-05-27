import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div
        className="hidden  md:flex flex-row justify-around p-3 border-b-[1px] bg-background"
        style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 2.5px 10px" }}
      >
        <div className="flex flex-row items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <div className="flex flex-row items-center bg-input px-3 py-[5px] gap-2 rounded-sm ">
            <IoSearch className="text-[17px]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none bg-inherit text-base font-medium"
            />
          </div>
        </div>
        {/*Navbar  */}
        <div className="flex flex-row gap-6">
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
            <label className="text-[13px]">Notifications</label>
          </div>
          <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
            <AiFillMessage className="text-lg" />
            <label className="text-[13px]">Message</label>
          </div>
          <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
            <img
              src="https://github.com/shadcn.png"
              alt="Me"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="md:hidden flex flex-row justify-between p-3 border-b-[1px] items-center bg-background"
        style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 2.5px 10px" }}
      >
        <div className="flex flex-col items-center hover:text-black text-gray-600 cursor-pointer">
          <img
            src="https://github.com/shadcn.png"
            alt="Me"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-row items-center bg-input px-3 py-[5px] gap-2 rounded-sm w-3/4">
          <IoSearch className="text-[17px]" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none border-none bg-inherit text-base font-medium"
          />
        </div>
        <AiFillMessage className="text-2xl hover:text-black text-gray-600 cursor-pointer " />
      </div>
    </>
  );
};

export default Header;
