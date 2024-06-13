import { MentorsDomain } from "@/DB/MentorsDomain";
import SelectComponent from "@/shareable/SelectComponent";
import React from "react";
import { Button } from "../ui/button";
import { FaRegStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import MultiSelectComponent from "@/shareable/MultiSelectComponent";
import { Separator } from "../ui/separator";

const ExploreMentorsFilters = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center my-4">
        <div className="grid grid-cols-2 md:flex gap-x-5 gap-3 md:gap-5 w-full justify-center">
          <Button variant="outline" className="hover:bg-gray-50 w-fit">
            <TbWorld />
            <span className="px-1">All Domains</span>
          </Button>
          <SelectComponent
            selectBtnStyle={"w-[180px]  text-sm font-medium"}
            placeholder={"Target Domain"}
            selectItems={MentorsDomain}
            itemStyle={"text-[13px]"}
          />
          <MultiSelectComponent />
          <Button variant="outline" className="hover:bg-gray-50 w-fit">
            <FaRegStar />
            <span className="px-1">Top Mentors</span>
          </Button>
        </div>
        <Separator />
        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-row items-center border-[1px] rounded-md w-3/4 p-2 gap-2 bg-background">
            <IoSearchSharp />
            <input
              type="text"
              placeholder="Search seniors by name,skills and domain..."
              className="hidden md:block outline-none text-sm bg-background"
            />
            <input
              type="text"
              placeholder="Search seniors..."
              className="md:hidden block outline-none text-sm bg-background "
            />
          </div>
          <SelectComponent
            selectBtnStyle={"w-[120px] h-fit py-[6px] text-sm"}
            placeholder={"Sort By"}
            selectItems={["Recommended", "Rating", "Popularity", "Newest"]}
            itemStyle={"text-[13px]"}
          />
        </div>
      </div>
    </>
  );
};

export default ExploreMentorsFilters;
