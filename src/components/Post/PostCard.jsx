import React from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReaction from "./PostReaction";
import ReplyInputBox from "./ReplyInputBox";
import CommentCard from "./CommentCard";
const PostCard = ({ pageRefer }) => {
  return (
    <>
      <Card className="h-full py-1">
        <CardContent className="p-[14px]">
          {/* Header */}
          <PostHeader />
          {/* Content */}
          <PostContent />
          {/* Reaction */}
          <Separator className="mb-2" />
          <PostReaction />
          {pageRefer !== "Profile" && pageRefer !== "Comments" && (
            <div className="px-1 pt-4">
              <ReplyInputBox placeholder="Add a comment..." />
            </div>
          )}
          {pageRefer === "Comments" && (
            <div className="mt-4">
              <CommentCard />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
