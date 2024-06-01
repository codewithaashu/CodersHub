import React from "react";
import ShortBioCard from "./ShortBioCard";
import ConnectionsCard from "./ConnectionsCard";
import AddPostCard from "./AddPostCard";
import PostsContainer from "./PostsContainer";

const HomeComponent = () => {
  return (
    <>
      <div className="hidden container py-5 md:grid grid-cols-9 gap-5">
        {/* Short Bio */}
        <div className="flex flex-col gap-3 col-span-2">
          <ShortBioCard />
          <ConnectionsCard />
        </div>
        {/* Posts */}
        <div className="flex flex-col gap-3 col-span-5">
          <AddPostCard />
          <PostsContainer />
        </div>

        {/* People and hashtag suggestion */}
        <div className="flex flex-col  gap-3 col-span-2">
          <ConnectionsCard />
        </div>
      </div>
      <div className="md:hidden m-2">
        {/* Posts */}
        <div className="flex flex-col gap-3">
          <AddPostCard />
          <PostsContainer />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
