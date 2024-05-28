import AvatarComponent from "@/shareable/AvatarComponent";
import React from "react";
import { Button } from "../ui/button";
import { FaUserMinus, FaUserPlus } from "react-icons/fa6";

const ConnectionItem = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center border-b-[1px] pb-[6px]">
        <div className="flex flex-row gap-2">
          <AvatarComponent
            className="w-9 h-9"
            imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
          />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-medium">Muskan</p>
            <p className="text-[11px] font-normal -mt-[1px]">LNCT University</p>
          </div>
        </div>
        <Button className="text-xs font-medium h-fit py-1 px-2 text-center  border-[1px] border-primary rounded-lg bg-card text-primary hover:bg-card flex flex-row items-center justify-center gap-[2px] ">
          <FaUserPlus />
          <p className="px-[2px]">Follow</p>
          {/* <FaUserMinus />
          <p className="px-[2px]">Unfollow</p> */}
        </Button>
      </div>
    </>
  );
};

export default ConnectionItem;
