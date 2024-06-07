import React from "react";
import Banner from "./Banner";
import Search from "./Search";
import FilterContainer from "./FilterContainer";
import JobsContainer from "./JobsContainer";

const JobsComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full min-h-screen py-5">
        {/* Banner with search */}
        <div>
          <Banner />
          <Search />
        </div>
        <div className="hidden container md:grid grid-cols-5 gap-5 mt-5">
          {/* Filter */}
          <div className="col-span-1">
            <FilterContainer />
          </div>
          {/*Jobs Container */}
          <div className="col-span-4">
            <JobsContainer />
          </div>
        </div>
        <div className="md:hidden flex flex-col px-3">
          {/* Filter */}
          {/*Jobs Container */}
          <JobsContainer />
        </div>
      </div>
    </>
  );
};

export default JobsComponent;
