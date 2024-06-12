import React from "react";
import { Card } from "../ui/card";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { Badge } from "../ui/badge";
import { FaUsers } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";

const EventsCard = ({ refer = "Events" }) => {
  console.log(refer);
  const navigate = useNavigate();
  return (
    <>
      <Card className={`relative ${refer === "EventDetails" ? "w-fit" : ""}`}>
        <div className="w-full h-28 bg-[#DCE2EC]"></div>
        <div className="absolute top-12 w-full flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1189767041/vector/hackathon-signs-round-design-template-thin-line-icon-concept-vector.jpg?s=612x612&w=0&k=20&c=DW-btIjpNjItFfk35N4KvrMkoGoqd1rEPwb_uV9IZEU="
            alt="Events"
            className="w-24 h-24 rounded-full cursor-pointer"
            onClick={() => navigate("/event-details")}
          />
        </div>
        <div className="p-5 mt-5">
          <div
            className="text-lg font-semibold text-center cursor-pointer"
            onClick={() => navigate("/event-details")}
          >
            HackVenture 2024
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineLocationOn className="text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <LiaMoneyBillSolid className="text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Free</p>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3">
              <Badge className="text-xs font-medium bg-green-100 text-green-600">
                Registration Open
              </Badge>
              <Badge
                variant="secondary"
                className="text-gray-500 font-normal text-xs"
              >
                2 days left
              </Badge>
            </div>
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <FaUsers />
              <p className="text-xs font-normal text-muted-foreground">
                373 Applied
              </p>
            </div>
            <IoBookmarkOutline className="cursor-pointer" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default EventsCard;
