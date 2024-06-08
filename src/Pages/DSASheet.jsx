import LeaderBoard from "@/components/Coding/LeaderBoard";
import DSASheetHeader from "@/components/DSASheet/DSASheetHeader";
import Navigation from "@/components/DSASheet/Navigation";
import SheetAccordion from "@/components/DSASheet/SheetAccordion";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const DSASheet = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 py-5 bg-muted ">
        <div className="container grid grid-cols-4 justify-between">
          <div className="flex flex-col gap-3 col-span-3">
            <DSASheetHeader />
            <div>
              <Navigation />
              <SheetAccordion />
            </div>
          </div>
          <div className="col-span-1">
            <LeaderBoard />
          </div>
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default DSASheet;
