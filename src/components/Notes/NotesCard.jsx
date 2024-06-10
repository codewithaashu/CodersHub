import React from "react";
import { Card } from "../ui/card";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";

const NotesCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="relative w-[320px] cursor-pointer justify-self-center">
        <div className="bg-[#EFEBEF] w-full h-40"></div>
        <div
          className="absolute top-6 z-10 left-20 shadow-md"
          onClick={() => navigate("/notes-details")}
        >
          <img
            src="https://imgv2-2-f.scribdassets.com/img/document/424668475/original/216x287/afb8b87c78/1715842105?v=1"
            alt="Book"
            className="h-44"
          />
        </div>
        <div className="p-5 pb-2 mt-7 flex flex-col gap-1">
          <h1 className="text-lg font-semibold">
            Most asked Fullstack Interview Questions
          </h1>
          <p className="text-[13px] text-muted-foreground">
            If you’re a web developer targeting MNC tech companies, take the
            help of this doc and ace your tech interviews.
          </p>
        </div>
        <Separator />
        <div className="flex justify-between px-5 pt-[6px] pb-3">
          <div className="flex flex-row gap-[6px] rounded-md hover:bg-gray-100 p-1  items-center">
            <BiUpvote className="text-base cursor-pointer" />
            {/* <BiSolidUpvote className="text-base cursor-pointer" /> */}
            <span className="text-sm mt-[2px]">113</span>
            <BiDownvote className="text-base cursor-pointer" />
            {/* <BiSolidDownvote className="text-base cursor-pointer" />
             */}
          </div>
          <div className="flex flex-row gap-2 items-center hover:bg-gray-100 hover:rounded-md p-2 pb-1 cursor-pointer">
            <FaRegBookmark className="text-base" />
            {/* <FaBookmark /> */}
          </div>
        </div>
      </Card>
    </>
  );
};

export default NotesCard;
