import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PostCard from "../Post/PostCard";
import PostImage from "../Post/PostImage";
import FilterBox from "./FilterBox";

const PostNavigation = () => {
  return (
    <>
      <Tabs defaultValue="posts" className="w-full py-3">
        <TabsList className="flex flex-row gap-3 md:gap-5 justify-start w-full bg-transparent overflow-x-auto">
          <TabsTrigger
            value="posts"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="comments"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Comments
          </TabsTrigger>
          <TabsTrigger
            value="images"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Images
          </TabsTrigger>
          {/* <TabsTrigger
            value="documents"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Documents
          </TabsTrigger> */}
          <TabsTrigger
            value="upvoted"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Upvoted
          </TabsTrigger>
          <TabsTrigger
            value="downvoted"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-200 text-primary"
          >
            Downvoted
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <FilterBox />
          <div className="flex flex-col gap-5">
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
          </div>
        </TabsContent>
        <TabsContent value="comments">
          <FilterBox />
          <div className="flex flex-col gap-5">
            <PostCard pageRefer={"Comments"} />
          </div>
        </TabsContent>
        <TabsContent value="images" className="pt-5">
          <div className="grid grid-cols-4 gap-5">
            <PostImage />
            <PostImage />
            <PostImage />
            <PostImage />
            <PostImage />
          </div>
        </TabsContent>
        <TabsContent value="upvoted">
          <FilterBox />
          <div className="flex flex-col gap-5">
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
          </div>
        </TabsContent>
        <TabsContent value="downvoted">
          <FilterBox />
          <div className="flex flex-col gap-5">
            <PostCard pageRefer={"Profile"} />
            <PostCard pageRefer={"Profile"} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default PostNavigation;
