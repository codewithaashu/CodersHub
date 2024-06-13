import React from "react";
import MentorsCard from "../Mentorship/MentorsCard";

const ExploreMentorsContainer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 flex-wrap my-5">
        <MentorsCard />
        <MentorsCard />
        <MentorsCard />
        <MentorsCard />
        <MentorsCard />
        <MentorsCard />
      </div>
    </>
  );
};

export default ExploreMentorsContainer;
