import SelectComponent from "@/shareable/SelectComponent";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaRandom } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <div className="hidden md:flex flex-row justify-between w-full gap-5">
        {/* Status Dropdown */}
        <SelectComponent
          selectBtnStyle={"w-[180px] font-medium"}
          placeholder={"Status"}
          selectItems={["Todo", "Solved", "Revision"]}
          itemStyle={"text-sm"}
        />

        {/* Search */}
        <div className="flex p-2 px-3 rounded-md border-2 bg-background items-center gap-3 flex-1">
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search questions..."
            className="outline-none text-sm font-normal text-gray-800 placeholder:font-normal"
          />
        </div>

        {/* Pick Random button */}
        <Button
          variant="outline"
          className="hover:bg-gray-50 rounded-lg text-sm font-medium"
        >
          <FaRandom className="text-gray-700" /> &nbsp;&nbsp;Pick One
        </Button>
      </div>
      <div className="md:hidden flex flex-row justify-between w-full flex-wrap gap-2">
        {/* Status Dropdown */}
        <SelectComponent
          selectBtnStyle={"w-[120px] font-medium"}
          placeholder={"Status"}
          selectItems={["Todo", "Solved", "Revision"]}
          itemStyle={"text-sm"}
        />
        {/* Pick Random button */}
        <Button
          variant="outline"
          className="hover:bg-gray-50 rounded-lg text-sm font-medium"
        >
          <FaRandom className="text-gray-700" /> &nbsp;&nbsp;Pick One
        </Button>

        {/* Search */}
        <div className="flex p-2 px-3 rounded-md border-2 bg-background items-center gap-3 flex-1 w-2/3">
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search questions..."
            className="outline-none text-sm font-normal text-gray-800 placeholder:font-normal"
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
