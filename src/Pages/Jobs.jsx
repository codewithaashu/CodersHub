import JobsComponent from "@/components/Jobs/JobsComponent";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Jobs = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-muted ">
        <JobsComponent />
      </div>
      <BottomTab />
    </>
  );
};

export default Jobs;
