import React from "react";
import PostCard from "./PostCard";

const PostsContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default PostsContainer;
