import React from "react";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LuAlarmClock } from "react-icons/lu";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ShareBox from "../Home/ShareBox";
const EventDetailsCard = () => {
  return (
    <>
      <div className="w-full py-[14px] border-b-[1px]">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://media.istockphoto.com/id/1189767041/vector/hackathon-signs-round-design-template-thin-line-icon-concept-vector.jpg?s=612x612&w=0&k=20&c=DW-btIjpNjItFfk35N4KvrMkoGoqd1rEPwb_uV9IZEU="
            alt="Event Logo"
            className="w-[70px] h-[70px]"
          />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold leading-6">HackVenture 2024</p>
            <p className="text-sm text-muted-foreground font-medium">Online</p>
            <p className="text-xs text-muted-foreground">Free</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 flex-wrap gap-4">
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <MdOutlineLocationOn className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Event location
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                Online
              </p>
            </div>
            <div className="flex flex-col gap-1  ">
              <div className="flex flex-row gap-1 items-center">
                <LiaMoneyBillSolid className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Fees
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                Free
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <LuAlarmClock className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Deadline
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                21 Jun' 24
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <PiStudent className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Applicants
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                526 Applied
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-end gap-5 items-center pt-1">
          <Button>Register now</Button>
          <Button variant="outline">
            <IoBookmarkOutline className="cursor-pointer" />
            <span className="px-1">Save</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <IoShareSocialOutline className="text-xl" />
              </div>
            </DialogTrigger>
            <ShareBox />
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default EventDetailsCard;
