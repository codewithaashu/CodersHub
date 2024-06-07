import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { MdWorkOutline } from "react-icons/md";
import { LuLandmark } from "react-icons/lu";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const JobsNavigation = () => {
  return (
    <>
      <TabsList className="flex flex-row gap-3 justify-start w-fit bg-transparent overflow-x-auto  h-fit px-4 py-2 rounded-full">
        <TabsTrigger
          value="opportunities"
          className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-100 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <LuLandmark className="text-sm md:text-[15px]" />
          </span>
          Opportunities
        </TabsTrigger>
        <TabsTrigger
          value="jobs"
          className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-100 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <MdWorkOutline className="text-sm md:text-[15px]" />
          </span>
          Jobs
        </TabsTrigger>
        <TabsTrigger
          value="internship"
          className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-100 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <TbDeviceDesktopAnalytics className="text-sm md:text-[15px]" />
          </span>
          Internship
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default JobsNavigation;
