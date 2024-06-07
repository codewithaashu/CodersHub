import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { BsArrowRepeat } from "react-icons/bs";
import RepostBox from "./RepostBox";
import { IoShareOutline } from "react-icons/io5";
import ShareBox from "../Home/ShareBox";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import ThreeDotPopover from "../Home/ThreeDotPopover";
import PostDetails from "./PostDetails";
import { useNavigate } from "react-router-dom";
const PostReaction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-between md:justify-start md:gap-5 w-full">
        <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] py-[6px] items-center">
          <BiUpvote className="text-base cursor-pointer" />
          {/* <BiSolidUpvote className="text-base cursor-pointer" /> */}
          <span className="text-[13px] mt-[1px]">113</span>
          <BiDownvote className="text-base cursor-pointer" />
          {/* <BiSolidDownvote className="text-base cursor-pointer" />
           */}
        </div>
        <div
          className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] cursor-pointer py-[6px] items-center md:hidden "
          onClick={() => navigate("/post")}
        >
          <FaRegComment className="text-base" />
          <span className="text-[13px]">113</span>
        </div>
        <Dialog>
          <DialogTrigger asChild className="hidden md:flex">
            <div className="flex flex-row gap-[6px] rounded-2xl bg-gray-200 hover:bg-gray-300 w-fit px-[10px] cursor-pointer py-[6px] items-center">
              <FaRegComment className="text-base" />
              <span className="text-[13px]">113</span>
            </div>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-[50vw] overflow-y-auto py-8 px-0">
            <PostDetails />
          </DialogContent>
        </Dialog>
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
    </>
  );
};

export default PostReaction;
