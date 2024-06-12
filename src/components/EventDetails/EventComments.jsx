import SelectComponent from "@/shareable/SelectComponent";
import React from "react";
import CommentCard from "../Post/CommentCard";
import EventCommentInputBox from "./EventCommentInputBox";

const EventComments = () => {
  return (
    <>
      <div className="px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        {/* Comment Input Box */}
        <EventCommentInputBox />
        {/* Heading and filter */}
        <div className="flex flex-row gap-5 px-2 justify-between items-center pt-4">
          <div className="text-base font-medium">Comments</div>
          <SelectComponent
            selectBtnStyle={"w-[120px] h-fit py-[6px] text-[13px]"}
            placeholder={"Sort By"}
            selectItems={["Relevance", "Popularity", "Newest"]}
            itemStyle={"text-xs"}
          />
        </div>
        {/* Comments  Card Container */}
        <div className="flex flex-col gap-5">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </>
  );
};

export default EventComments;
