import React from "react";
import JobsCard from "../Jobs/JobsCard";

const SimilarJobsContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full ">
        <div className="text-lg font-medium text-gray-800 px-2 ">
          Similar Job Post
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <JobsCard />
          <JobsCard />
          <JobsCard />
        </div>
      </div>
    </>
  );
};

export default SimilarJobsContainer;
