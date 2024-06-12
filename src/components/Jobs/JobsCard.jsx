import React from "react";
import { Card, CardContent } from "../ui/card";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiCalendarDots } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { IoBookmarkOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const JobsCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className=" w-full md:w-[320px] cursor-pointer"
        onClick={() => navigate("/job-details")}
      >
        <CardContent className="py-4">
          <div className="flex flex-row gap-5 items-center border-b-[1px] pb-3">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1726099200&v=beta&t=qHLQIGhITuqESsPtC55uz6RH3tivCEDfxyRDRVJ6Wz8"
              alt="Company Logo"
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col gap-0">
              <p className="text-base font-semibold leading-6">
                React Developer
              </p>
              <p className="text-[13px] text-muted-foreground font-medium">
                LinkedIn Corporation
              </p>
              <p className="text-[11px] text-muted-foreground">
                Bangalore,India
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b-[1px] py-3">
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineLocationOn className="text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Rohtak,Gurgaon,Delhi
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <LiaMoneyBillSolid className="text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground">₹ 3,60,000/year</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <PiCalendarDots className="text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground">3 Months</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <Badge className="text-xs font-medium bg-green-100 text-green-600  ">
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
          <div className="flex justify-between py-3 pb-1">
            <div className="flex gap-1 items-center">
              <IoEyeOutline />
              <p className="text-xs font-normal text-muted-foreground">
                300 Impressions
              </p>
            </div>
            <IoBookmarkOutline className="cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default JobsCard;
