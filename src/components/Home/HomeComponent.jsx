import React from "react";
import ShortBioCard from "./ShortBioCard";
import ConnectionsCard from "./ConnectionsCard";

const HomeComponent = () => {
  return (
    <>
      <div className="container py-5">
        {/* Short Bio */}
        <div className="flex flex-col gap-3">
          <ShortBioCard />
          <ConnectionsCard />
        </div>
        {/* Posts */}
        <div></div>
        {/* People and hashtag suggestion */}
        <div></div>
      </div>
    </>
  );
};

export default HomeComponent;
