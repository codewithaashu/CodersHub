import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import { Separator } from "../ui/separator";
import PostReaction from "./PostReaction";
import CommentInputBox from "./CommentInputBox";
import CommentCard from "./CommentCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BiChevronDown } from "react-icons/bi";

const PostDetails = () => {
  const [position, setPosition] = useState("Relevant");
  return (
    <>
      <div className="flex flex-col gap-5 mx-3 bg-background md:p-0 p-5">
        {/* Post */}
        <div>
          {/* Header */}
          <PostHeader />
          {/* Content */}
          <PostContent />
          {/* Reaction */}
          <Separator className="mb-2" />
          <PostReaction />
        </div>
        {/* Add Comment */}
        <CommentInputBox />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-5 px-2">
            <div className="text-base font-medium">Comments</div>
            <DropdownMenu className="w-fit">
              <DropdownMenuTrigger asChild>
                <button className="w-fit h-fit text-xs border-[1px] p-[6px] py-1 rounded-md flex flex-row items-center">
                  Sort By
                  <BiChevronDown className="text-sm" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem
                    value="Relevant"
                    className="text-xs pl-6"
                  >
                    Relevant
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="mostLiked" className="text-xs">
                    Liked
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Recent" className="text-xs">
                    Recent
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
