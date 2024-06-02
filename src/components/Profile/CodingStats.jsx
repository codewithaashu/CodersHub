import React from "react";
import { Card } from "../ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
const CodingStats = () => {
  return (
    <>
      <Card className="p-5">
        {true && (
          <div className="flex flex-col pb-3 gap-2 border-b-[1px] ">
            <h1 className="text-[16px] font-semibold pb-1">Leetcode Stats</h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium justify-evenly">
                <div style={{ width: 85, height: 85 }}>
                  <CircularProgressbar
                    value={
                      // (
                      //   leetcodeStat?.problemSolvedCount[0].count /
                      //   leetcodeStat?.totalProblems
                      // ).toFixed(2) * 100
                      (236 / 1132).toFixed(2) * 100
                    }
                    text={`${236} 
                  Solved`}
                    styles={buildStyles({
                      textSize: "14px",
                      pathColor: "#262D3E",
                      textColor: "#262D3E",
                      trailColor: "#F1F5F9",
                      strokeWidth: 4,
                    })}
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-gray-800 text-sm font-medium">
                    Easy : <span className="text-gray-950 text-sm">{155}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Medium : <span className="text-gray-950 text-sm">{25}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Hard : <span className="text-gray-950 text-sm">{76}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  📊
                  <p>
                    Ranking :{" "}
                    <span className="text-gray-800 text-sm">{23458}</span>
                  </p>
                </div>
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  🥇
                  <p>
                    Badges : <span className="text-gray-950 text-sm">{2}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {true && (
          <div className="flex flex-col py-3 gap-2 border-b-[1px] ">
            <h1 className="text-[16px] font-semibold pb-1">
              GeeksForGeeks Stats
            </h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium justify-evenly">
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={(789 / 2658).toFixed(2)}
                    text={`${24} Solved`}
                    styles={buildStyles({
                      textSize: "14px",
                      pathColor: "#262D3E",
                      textColor: "#262D3E",
                      trailColor: "#F1F5F9",
                      strokeWidth: 4,
                    })}
                  />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-gray-800 text-sm font-medium">
                    School : <span className="text-gray-950 text-sm">{32}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Basic : <span className="text-gray-950 text-sm">{199}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Easy : <span className="text-gray-950 text-sm">{145}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Medium : <span className="text-gray-950 text-sm">{78}</span>
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Hard : <span className="text-gray-950 text-sm">{88}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-between gap-[10px] pt-1">
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  📊
                  <p>
                    Institute Ranking :{" "}
                    <span className="text-gray-800 text-sm">{2}</span>
                  </p>
                </div>
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  🎯
                  <p>
                    Score :{" "}
                    <span className="text-gray-950 text-sm">{1946}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {true && (
          <div className="flex flex-col py-3 gap-2 ">
            <h1 className="text-[16px] font-semibold pb-1">Github Stats</h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row flex-wrap justify-between gap-[10px] pt-1">
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  👨🏻‍💻
                  <p>
                    Followers:
                    <span className="text-gray-800 text-sm">{45}</span>
                  </p>
                </div>
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  👩🏻‍💻
                  <p>
                    Following :{" "}
                    <span className="text-gray-950 text-sm">{32}</span>
                  </p>
                </div>
                <div className="flex flex-row gap-[3px] items-center text-gray-800 text-sm font-medium">
                  <RiGitRepositoryPrivateLine />
                  <p>
                    Repository :{" "}
                    <span className="text-gray-950 text-sm">{29}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </>
  );
};

export default CodingStats;
