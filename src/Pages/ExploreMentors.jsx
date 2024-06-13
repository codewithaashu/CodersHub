import ExploreMentorsContainer from "@/components/ExploreMentors/ExploreMentorsContainer";
import ExploreMentorsFilters from "@/components/ExploreMentors/ExploreMentorsFilters";
import ExploreMentorsHeader from "@/components/ExploreMentors/ExploreMentorsHeader";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const ExploreMentors = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 bg-muted py-5">
        <div className="p-5 md:container">
          <ExploreMentorsHeader />
          <ExploreMentorsFilters />
          <ExploreMentorsContainer />
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default ExploreMentors;
