import AvatarComponent from "@/shareable/AvatarComponent";
import React from "react";
import { FaUserPlus } from "react-icons/fa6";
import { Button } from "../ui/button";

const PostHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <AvatarComponent
            className="w-12 h-12 "
            imgSrc="https://github.com/shadcn.png"
          />
          <div className="flex flex-col gap-0">
            <p className="text-[15px] font-medium leading-5">Ashish Singh</p>
            <p className="text-xs font-normal my-0 text-muted-foreground">
              LNCT Group of College,Bhopal
            </p>
            <p className="text-[10px] font-normal text-muted-foreground -mt-[1px]">
              2days ago
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="text-[13px] font-medium h-fit py-1 px-2 text-center  border-[1px] border-primary rounded-lg bg-card text-primary hover:bg-card flex flex-row items-center justify-center gap-[2px] ">
            <FaUserPlus />
            <p className="px-[2px]">Follow</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
