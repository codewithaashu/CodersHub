import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaRegComment, FaUserPlus } from "react-icons/fa6";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Popover, PopoverTrigger } from "../ui/popover";
import ThreeDotPopover from "./ThreeDotPopover";
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ShareBox from "./ShareBox";
import RepostBox from "./RepostBox";
import AvatarComponent from "@/shareable/AvatarComponent";
const PostCard = () => {
  return (
    <>
      <Card className="h-full py-1">
        <CardContent className="p-[14px]">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <AvatarComponent
                className="w-12 h-12 "
                imgSrc="https://github.com/shadcn.png"
              />
              <div className="flex flex-col gap-0">
                <p className="text-[15px] font-medium leading-5">
                  Ashish Singh
                </p>
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
          {/* Content */}
          <div className="flex flex-col gap-2 py-3">
            {/* Paragraph */}
            <p className="text-[13.5px] font-normal  leading-[22px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              adipisci alias praesentium eius eveniet! Iure eius eveniet ut!
              Voluptate quia facere culpa commodi, hic quasi excepturi
              recusandae soluta sequi voluptatum, dolorum impedit repudiandae
              distinctio.
              <span className="text-primary text-sm font-medium cursor-pointer px-[6px]">
                ... See More
              </span>
            </p>
            {/* Media */}
            <Separator className="mb-1" />
            <div className="bg-transparent h-96 rounded-md flex justify-center">
              <img
                src="http://res.cloudinary.com/dycobmjyk/image/upload/v1714324259/Social%20Media/tyigshwfd6a57ob0wahb.jpg"
                alt="Media Content"
                // fill
                className="rounded-md h-full object-contain"
              />
            </div>
          </div>
          {/* Reaction */}
          <Separator className="mb-2" />
          <div className="flex flex-row justify-between md:justify-start md:gap-5 w-full">
            <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] py-[6px] items-center">
              <BiUpvote className="text-base cursor-pointer" />
              {/* <BiSolidUpvote className="text-base cursor-pointer" /> */}
              <span className="text-[13px] mt-[1px]">113</span>
              <BiDownvote className="text-base cursor-pointer" />
              {/* <BiSolidDownvote className="text-base cursor-pointer" />
               */}
            </div>
            <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] cursor-pointer py-[6px] items-center">
              <FaRegComment className="text-base" />
              <span className="text-[13px]">113</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] cursor-pointer py-[6px] items-center">
                  <BsArrowRepeat className="text-base" />
                  <span className="text-[13px]">50</span>
                </div>
              </DialogTrigger>
              <RepostBox />
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] cursor-pointer py-[6px] items-center">
                  <IoShareOutline className="text-base" />
                  <span className="text-[13px]">Share</span>
                </div>
              </DialogTrigger>
              <ShareBox />
            </Dialog>
            <Popover>
              <PopoverTrigger asChild>
                <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                  <PiDotsThreeOutlineFill />
                </button>
              </PopoverTrigger>
              <ThreeDotPopover />
            </Popover>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
