import PostDetails from "@/components/Post/PostDetails";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const PostDetailsPage = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-muted ">
        <div className="py-5 overflow-y-visible">
          <PostDetails />
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default PostDetailsPage;
