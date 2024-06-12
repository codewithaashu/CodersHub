import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";

const EventDetailsNavigation = () => {
  return (
    <>
      <TabsList className="flex flex-row gap-2 md:gap-3 justify-start w-fit  bg-transparent overflow-x-auto  h-fit px-0 md:px-4 py-2 rounded-full ">
        <TabsTrigger
          value="description"
          className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-100 text-primary"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="discussion"
          className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-background w-fit bg-gray-100 text-primary"
        >
          Discussions
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default EventDetailsNavigation;
