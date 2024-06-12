import JobDetailsContainer from "@/components/JobDetails/JobDetailsContainer";
import SimilarJobsContainer from "@/components/JobDetails/SimilarJobsContainer";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const JobDetails = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-muted md:py-5">
        <div className="hidden container md:grid grid-cols-4 gap-5 py-5 px-3">
          <JobDetailsContainer />
          <SimilarJobsContainer />
        </div>
        <div className="md:hidden  flex flex-col w-full gap-5 py-5 px-3">
          <JobDetailsContainer />
          <SimilarJobsContainer />
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default JobDetails;
