import React from "react";
import { Card } from "../ui/card";
import DsaSheetCard from "./DsaSheetCard";
import { SDESheets } from "@/DB/SDESheets";

const DsaSheetContainer = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-5 col-span-3">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
          {SDESheets.map((curr, index) => {
            return (
              <DsaSheetCard
                imgSrc={curr.imgSrc}
                heading={curr.heading}
                content={curr.content}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DsaSheetContainer;
