import React from "react";
import { Card } from "../ui/card";

const CommunityStats = () => {
  return (
    <>
      <Card className="p-5">
        <h1 className="text-[17px] font-semibold pb-3">Profile Stats</h1>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row justify-between text-[13px]">
            <p className="font-medium text-muted-foreground">
              Post impressions
            </p>
            <p className="text-right text-primary font-semibold">2K</p>
          </div>
          <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
            Last Week <span className="px-1 text-primary font-medium">40</span>
          </p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row justify-between text-[13px]">
            <p className="font-medium text-muted-foreground">Discuss</p>
            <p className="text-right text-primary font-semibold">5</p>
          </div>
          <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
            Last Week <span className="px-1 text-primary font-medium">0</span>
          </p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row justify-between text-[13px]">
            <p className="font-medium text-muted-foreground">Solution</p>
            <p className="text-right text-primary font-semibold">90</p>
          </div>
          <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
            Last Week <span className="px-1 text-primary font-medium">5</span>
          </p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row justify-between text-[13px]">
            <p className="font-medium text-muted-foreground">Rank</p>
            <p className="text-right text-primary font-semibold">1012</p>
          </div>
          <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
            Monthly Rank{" "}
            <span className="px-1 text-primary font-medium">5</span>
          </p>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex flex-row justify-between text-[13px]">
            <p className="font-medium text-muted-foreground">Reputation</p>
            <p className="text-right text-primary font-semibold">⭐⭐⭐⭐</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CommunityStats;
