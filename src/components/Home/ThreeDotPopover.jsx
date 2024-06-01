import React from "react";
import { PopoverContent } from "../ui/popover";
import { FaRegBookmark, FaBookmark, FaUserXmark } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";

const ThreeDotPopover = () => {
  return (
    <>
      <PopoverContent className="p-2 flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-2 items-center  border-b-[1px] hover:bg-gray-100 hover:rounded-md p-2 pb-1 cursor-pointer">
          <FaRegBookmark className="text-sm" />
          <p className="text-[15px]">Save</p>
          {/* <FaBookmark />
          <p>Saved</p> */}
        </div>
        <div className="flex flex-row gap-2 items-center  border-b-[1px] hover:bg-gray-100 hover:rounded-md p-2 pb-1 cursor-pointer">
          <FaUserXmark className="text-sm" />
          <p className="text-[15px]">Unfollow</p>
        </div>
        <div className="flex flex-row gap-2 items-center hover:bg-gray-100 p-2 pb-1 cursor-pointer hover:rounded-md">
          <MdOutlineReportProblem className="text-sm" />
          <p className="text-[15px]">Report Post</p>
        </div>
      </PopoverContent>
    </>
  );
};

export default ThreeDotPopover;
