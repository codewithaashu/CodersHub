import AvatarComponent from "@/shareable/AvatarComponent";
import React, { useState } from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import ThreeDotPopover from "../Home/ThreeDotPopover";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { CgMailReply } from "react-icons/cg";
import ReplyInputBox from "./ReplyInputBox";
import ReplyCard from "./ReplyCard";
const CommentCard = () => {
  const [replyBox, setReplyBox] = useState(false);
  const [reply, setReply] = useState(false);
  return (
    <>
      <div className="flex flex-row gap-3 w-full justify-center">
        <AvatarComponent
          className="w-8 h-8 mt-1"
          imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
        />
        <div className="w-full flex flex-col gap-[2px] bg-gray-100 rounded-md shadow-sm pb-2">
          <div className="flex flex-col gap-1 w-full  p-2  border-b-[1px] ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-0">
                <p className="text-xs font-medium leading-4">Rohan Kumar</p>
                <p className="text-[11px] text-muted-foreground">
                  LNCT College
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-[11px] text-muted-foreground">1 h ago</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="hover:bg-gray-200  rounded-full p-2">
                      <PiDotsThreeOutlineFill />
                    </button>
                  </PopoverTrigger>
                  <ThreeDotPopover />
                </Popover>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              {/* <img
                src="http://res.cloudinary.com/dycobmjyk/image/upload/v1712818339/Social%20Media/t1afguwle9vvitbtbzdr.avif"
                alt="Media"
                className="w-24 max-h-24 h-fit rounded-sm"
              /> */}
              <p className="text-[13px] font-normal">Nice, Awesome</p>
            </div>
          </div>
          <div className="flex gap-[6px] px-2">
            <div className="flex flex-row gap-[6px] w-fit  items-center">
              <BiUpvote className="text-sm cursor-pointer" />
              {/* <BiSolidUpvote className="text-base cursor-pointer" /> */}
              <span className="text-xs mt-[1px]">113</span>
              <BiDownvote className="text-sm cursor-pointer" />
              {/* <BiSolidDownvote className="text-base cursor-pointer" />
               */}
            </div>
            <div
              className="flex flex-row gap-1 w-fit px-[10px] py-[6px] items-center cursor-pointer"
              onClick={() => setReplyBox(!replyBox)}
            >
              <CgMailReply className="text-sm" />
              <span className="text-xs mt-[1px]">Reply</span>
            </div>
            <div
              className="flex flex-row gap-1 w-fit px-[10px] py-[6px] items-center cursor-pointer"
              onClick={() => setReply(!reply)}
            >
              <span className="text-xs mt-[1px] hover:underline">
                2 Replies
              </span>
            </div>
          </div>
          {replyBox && (
            <div className="pl-10 pr-3 pb-2">
              <ReplyInputBox />
            </div>
          )}
          {reply && (
            <div className="flex flex-col gap-2">
              <ReplyCard />
              <ReplyCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentCard;
