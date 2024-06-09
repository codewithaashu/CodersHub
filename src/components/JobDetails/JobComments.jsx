import React from "react";
import CommentCard from "../Post/CommentCard";
import JobCommentInputBox from "./JobCommentInputBox";
import SelectComponent from "@/shareable/SelectComponent";

const JobComments = () => {
  return (
    <>
      <div className="px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        {/* Comment Input Box */}
        <JobCommentInputBox />
        {/* Heading and filter */}
        <div className="flex flex-row gap-5 px-2 justify-between items-center pt-4">
          <div className="text-base font-medium">Comments</div>
          <SelectComponent
            selectBtnStyle={"w-[120px] h-fit py-[6px] text-[13px]"}
            placeholder={"Filter By"}
            selectItems={["All", "Question", "Experience", "Review"]}
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

export default JobComments;
