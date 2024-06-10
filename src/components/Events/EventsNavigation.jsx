import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { MdEmojiEvents } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
const EventsNavigation = () => {
  return (
    <>
      <TabsList className="flex flex-row gap-3 justify-start md:w-fit bg-transparent md:bg-gray-200 overflow-x-auto  h-fit px-4 py-2 rounded-none md:rounded-full">
        <TabsTrigger
          value="competitions"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <MdEmojiEvents className="text-sm md:text-[15px]" />
          </span>
          Competitions
        </TabsTrigger>
        <TabsTrigger
          value="hackathons"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <IoCodeSlash className="text-sm md:text-[15px]" />
          </span>
          Hackathons
        </TabsTrigger>
        <TabsTrigger
          value="workshops"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <RiToolsFill className="text-sm md:text-[15px]" />
          </span>
          Workshops
        </TabsTrigger>
        <TabsTrigger
          value="technical-events"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <FiAward className="text-sm md:text-[15px]" />
          </span>
          Technical Events
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default EventsNavigation;
