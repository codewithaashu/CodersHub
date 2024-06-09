import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import LeaderBoardItem from "./LeaderBoardItem";
import PaginationComponent from "@/shareable/PaginationComponent";

const LeaderBoardSheet = () => {
  return (
    <>
      <SheetContent className="overflow-y-auto w-full">
        <SheetHeader>
          <SheetTitle>Leaderboad</SheetTitle>
        </SheetHeader>
        <div className="my-5 w-full flex flex-col gap-2">
          <LeaderBoardItem refer={"sheet"} />
          <PaginationComponent />
        </div>
      </SheetContent>
    </>
  );
};

export default LeaderBoardSheet;
