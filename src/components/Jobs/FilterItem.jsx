import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { Checkbox } from "../ui/checkbox";
import { FilterJobCategories } from "@/DB/FilterCategories";

const FilterItem = ({ category }) => {
  return (
    <>
      <div className="flex flex-col gap-2 border-b-[1px] py-2 pb-3">
        <div className="flex flex-row gap-2 items-center text-base">
          <MdWorkOutline className="text-base" />
          <div className="text-[15px] font-medium">{category}</div>
        </div>
        <div className="flex flex-col gap-2">
          {FilterJobCategories[category].sort().map((curr, index) => {
            return (
              <div key={index} className="flex flex-row gap-2 items-center">
                <Checkbox id="terms" className=" rounded-sm" />
                <label
                  htmlFor="terms"
                  className="text-[13px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {curr}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterItem;
