import React from "react";
import ShortBioCard from "./ShortBioCard";
import ConnectionsCard from "./ConnectionsCard";
import AddPostCard from "./AddPostCard";

const HomeComponent = () => {
  return (
    <>
      <div className="container py-5 grid grid-cols-5 gap-5">
        {/* Short Bio */}
        <div className="flex flex-col gap-3 col-span-1">
          <ShortBioCard />
          <ConnectionsCard />
        </div>
        {/* Posts */}
        <div className="flex flex-col gap-3 col-span-3">
          <AddPostCard />
        </div>

        {/* People and hashtag suggestion */}
        <div className="flex flex-col  gap-3 col-span-1">
          <ConnectionsCard />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
