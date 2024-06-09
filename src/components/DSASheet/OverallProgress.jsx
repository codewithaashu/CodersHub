import React from "react";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";

const OverallProgress = () => {
  return (
    <Card className="p-5 flex flex-col items-center gap-3">
      <div className="text-lg font-semibold ">Your Stats</div>
      <div className="flex flex-col gap-[10px] w-10/12">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full">
            <p className="text-emerald-800 text-sm font-medium">Easy</p>
            <p className="text-[13px] font-medium">3/28</p>
          </div>
          <Progress
            value={66}
            className="w-full h-[6px] bg-emerald-100"
            color="bg-emerald-600"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full">
            <p className="text-yellow-600 text-sm font-medium">Medium</p>
            <p className="text-[13px] font-medium">3/28</p>
          </div>
          <Progress
            value={33}
            className="w-full h-[6px] bg-yellow-100"
            color="bg-yellow-600"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full">
            <p className="text-red-600 text-sm font-medium">Hard</p>
            <p className="text-[13px] font-medium">3/28</p>
          </div>
          <Progress
            value={33}
            className="w-full h-[6px] bg-red-100"
            color="bg-red-600"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full">
            <p className="text-[#1d4fd8d5] text-sm font-medium">Total</p>
            <p className="text-[13px] font-medium">3/28</p>
          </div>
          <Progress
            value={33}
            className="w-full h-[6px] bg-[#1d4fd826]"
            color="bg-[#1d4fd8d5]"
          />
        </div>
      </div>
    </Card>
  );
};

export default OverallProgress;
