import React, { useState } from "react";
import CommentCard from "../Post/CommentCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import JobCommentInputBox from "./JobCommentInputBox";

const JobComments = () => {
  return (
    <>
      <div className="px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        {/* Comment Input Box */}
        <JobCommentInputBox />
        {/* Heading and filter */}
        <div className="flex flex-row gap-5 px-2 justify-between items-center pt-4">
          <div className="text-base font-medium">Comments</div>
          <Select>
            <SelectTrigger className="w-[120px] h-fit py-[6px] text-[13px]">
              <SelectValue placeholder="Filter By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-xs">Filter By</SelectLabel>
                <SelectItem value="all" className="text-xs">
                  All
                </SelectItem>
                <SelectItem value="question" className="text-xs">
                  Question
                </SelectItem>
                <SelectItem value="experience" className="text-xs">
                  Experience
                </SelectItem>
                <SelectItem value="review" className="text-xs">
                  Review
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
