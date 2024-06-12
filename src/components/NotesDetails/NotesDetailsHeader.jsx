import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { IoShareOutline } from "react-icons/io5";
import ShareBox from "../Home/ShareBox";
import { Button } from "../ui/button";

const NotesDetailsHeader = () => {
  return (
    <>
      <div className="flex flex-col gap-1 pt-3">
        <div className="text-2xl font-semibold">Delivery Note PDF</div>
        <p className="text-sm text-muted-foreground w-11/12 md:w-3/4 mt-2">
          The document is a delivery note acknowledging the transfer of a
          vehicle from a seller to a buyer. It includes details of the vehicle
          like chassis number, engine number, registration number, year, make,
          and model.Both the buyer and seller sign to confirm that on the date
          and time specified, ownership and responsibility is transferred from
          the seller to the buyer, with the buyer now being responsible for
          traffic offenses, accidents, and other legal issues involving the
          vehicle.
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <div className="text-[15px] font-medium">No. of Pages:</div>
            <p className="text-sm ">2 pages</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-[15px] font-medium">Author Name:</div>
            <p className="text-sm ">Ashish Ranjan</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-[15px] font-medium">Credit to:</div>
            <a className="text-sm" href="">
              Ashish Ranjan
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 md:gap-5 mt-3">
          <div className="flex flex-row gap-[6px] rounded-2xl  hover:bg-gray-200 w-fit px-[10px] py-[6px] items-center">
            <BiUpvote className="text-base cursor-pointer" />
            {/* <BiSolidUpvote className="text-base cursor-pointer" /> */}
            <span className="text-[13px] mt-[1px]">113</span>
            <BiDownvote className="text-base cursor-pointer" />
            {/* <BiSolidDownvote className="text-base cursor-pointer" />
             */}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-row gap-[6px] rounded-2xl  hover:bg-gray-200 w-fit px-[10px] cursor-pointer py-[6px] items-center">
                <IoShareOutline className="text-base" />
                <span className="text-[13px]">Share</span>
              </div>
            </DialogTrigger>
            <ShareBox />
          </Dialog>
          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-2xl p-2 cursor-pointer">
            <FaRegBookmark className="text-sm" />
            <p className="text-[15px]">Save</p>
            {/* <FaBookmark />
          <p>Saved</p> */}
          </div>
          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">
            <MdOutlineReportProblem className="text-sm" />
            <p className="text-[15px]">Report</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1-WOXTu52yFy5MBAypXhQQtSsaasBM2Ui/view"
          target="_blank"
        >
          <Button className="w-fit my-2">Download now</Button>
        </a>
      </div>
    </>
  );
};

export default NotesDetailsHeader;
