import React from "react";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCalendarDots, PiStudent } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LuAlarmClock } from "react-icons/lu";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ShareBox from "../Home/ShareBox";

const JobDetailsCard = () => {
  return (
    <>
      <div className="w-full py-[14px] border-b-[1px]">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1726099200&v=beta&t=qHLQIGhITuqESsPtC55uz6RH3tivCEDfxyRDRVJ6Wz8"
            alt="Company Logo"
            className="w-[70px] h-[70px]"
          />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold leading-6">React Developer</p>
            <p className="text-sm text-muted-foreground font-medium">
              LinkedIn Corporation
            </p>
            <p className="text-xs text-muted-foreground">Bangalore,India</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-1 items-center">
                <MdOutlineLocationOn className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Job location
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                Rohtak,Gurgaon,Delhi
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <LiaMoneyBillSolid className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Stipend
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                ₹ 3,60,000/year
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <PiCalendarDots className="text-[15px] md:text-base text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Duration
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                3 Months
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
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/14765/14765084.png"
                  alt="Icon"
                  className="w-[13px] h-[13px] md:h-4 md:w-4"
                />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Skills
                </p>
              </div>
              <p className="text-xs md:text-[13px]x text-muted-foreground">
                Python, C, C++, Java, JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <Badge className="text-xs font-medium bg-[#bdf4c8] text-primary  ">
              Internship
            </Badge>
            <Badge
              variant="secondary"
              className="text-gray-500 font-normal text-xs"
            >
              2 days ago
            </Badge>
          </div>
        </div>
        <div className="flex justify-start md:justify-end gap-5 items-center pt-1">
          <Button>Apply</Button>
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

export default JobDetailsCard;
