import React, { useState } from "react";
import { Card } from "../ui/card";

const DSASheetHeader = () => {
  const [viewMore, setViewMore] = useState(false);
  const content =
    "SDE Sheet contains very handily crafted and picked top coding interview questions from different topics of Data Structures & Algorithms. These questions are one of the most asked coding interview questions in coding interviews of companies like Google, Amazon, Microsoft, Facebook, Swiggy, Flipkart, etc, and cover almost all of the concepts related to Data Structure & Algorithms.";
  return (
    <>
      <Card className="p-3  md:p-5 flex flex-col gap-2">
        <h1 className="text-primary text-lg md:text-2xl leading-6">
          Striver’s SDE Sheet – Top Coding Interview Problems
        </h1>
        {viewMore ? (
          <p className="text-[13px] font-normal text-gray-600 ">
            {content}{" "}
            <span
              className="text-gray-900 cursor-pointer px-1 font-medium"
              onClick={() => setViewMore(false)}
            >
              ...see less
            </span>
          </p>
        ) : (
          <>
            <p className="hidden md:block text-[13px] font-normal text-gray-600">
              {content.slice(0, 240)}{" "}
              <span
                className="text-gray-900 cursor-pointer px-1 font-medium"
                onClick={() => setViewMore(true)}
              >
                ...see more
              </span>
            </p>
            <p className="block md:hidden text-[13px] font-normal text-gray-600">
              {content.slice(0, 150)}{" "}
              <span
                className="text-gray-900 cursor-pointer px-1 font-medium"
                onClick={() => setViewMore(true)}
              >
                ...see more
              </span>
            </p>
          </>
        )}
      </Card>
    </>
  );
};

export default DSASheetHeader;
