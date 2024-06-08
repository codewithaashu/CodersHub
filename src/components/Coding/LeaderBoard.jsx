import React from "react";
import { Card } from "../ui/card";
import LeaderBoardItem from "./LeaderBoardItem";
import { Button } from "../ui/button";

const LeaderBoard = () => {
  return (
    <>
      <Card className="col-span-1 px-2 py-5 flex flex-col gap-3 justify-self-end items-center">
        <div className="flex gap-5 self-start px-2">
          <div className="text-lg font-semibold">Leaderboard</div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2817/2817941.png"
            alt="Leaderboard"
            className="w-5 h-5"
          />
        </div>
        <LeaderBoardItem />
        <Button variant="outline" className="hover:bg-gray-100 w-fit">
          View More &gt;
        </Button>
      </Card>
    </>
  );
};

export default LeaderBoard;
