import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";

const MentorshipNavigation = () => {
  return (
    <>
      <TabsList className="hidden md:flex flex-row gap-3 justify-start md:w-fit bg-transparent md:bg-gray-200 overflow-x-hidden  h-fit px-4 py-2 rounded-none md:rounded-full">
        <TabsTrigger
          value="How to Start"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          How to Start
        </TabsTrigger>
        <TabsTrigger
          value="Placement Prep"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          Placement Prep
        </TabsTrigger>
        <TabsTrigger
          value="College Exam Prep"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          College Exam Prep
        </TabsTrigger>
        <TabsTrigger
          value="DSA Guidance"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          DSA Guidance
        </TabsTrigger>
        <TabsTrigger
          value="Web Development"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          Web Development
        </TabsTrigger>
        <TabsTrigger
          value="App Development"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          App Development
        </TabsTrigger>
        <TabsTrigger
          value="Data Analaytics"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          Data Analaytics
        </TabsTrigger>
        <TabsTrigger
          value="Data Science"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          Data Science
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default MentorshipNavigation;
