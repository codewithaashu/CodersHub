import LeaderBoard from "@/components/Coding/LeaderBoard";
import DSASheetHeader from "@/components/DSASheet/DSASheetHeader";
import Navigation from "@/components/DSASheet/Navigation";
import OverallProgress from "@/components/DSASheet/OverallProgress";
import SheetAccordion from "@/components/DSASheet/SheetAccordion";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const DSASheet = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 py-5 bg-muted ">
        <div className="hidden container md:grid grid-cols-4 justify-between gap-7 md:py-5">
          <div className="flex flex-col gap-7 col-span-3">
            <DSASheetHeader />
            <div className="flex flex-col gap-4">
              <Navigation />
              <SheetAccordion />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <OverallProgress />
            <LeaderBoard />
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-5 px-3">
          <div className="flex flex-col gap-7 col-span-3">
            <DSASheetHeader />
            <div className="flex flex-col gap-4">
              <Navigation />
              <SheetAccordion />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <OverallProgress />
            <LeaderBoard />
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default DSASheet;
