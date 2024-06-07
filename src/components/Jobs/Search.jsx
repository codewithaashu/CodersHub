import React from "react";
import {
  IoCloseCircle,
  IoCloseCircleOutline,
  IoLocationOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { Button } from "../ui/button";
import { JobCategories } from "@/DB/JobCategories";
import CategoryItem from "./CategoryItem";

const Search = () => {
  return (
    <>
      <div className="hidden p-1 mx-auto rounded-full shadow-md bg-background  md:flex flex-row items-center justify-evenly w-3/4 mt-4">
        <div className="flex flex-row items-center  rounded-full px-4 py-2 w-2/5  gap-2">
          <IoSearchSharp className="cursor-pointer text-lg" />
          <input
            type="text"
            placeholder="Job Title or Keywords"
            className="outline-none p-2 text-sm "
          />
          <IoCloseCircleOutline className="cursor-pointer mx-auto text-lg" />
        </div>
        <div className="flex flex-row items-center rounded-full px-4 py-2 w-2/5 gap-2">
          <IoLocationOutline className="cursor-pointer text-lg" />
          <input
            type="text"
            placeholder="Job Title or Keywords"
            className="outline-none p-2 text-sm "
          />
          <IoCloseCircleOutline className="cursor-pointer mx-auto text-lg" />
        </div>
        <div>
          <Button className="rounded-full w-36">Search</Button>
        </div>
      </div>
      <div className="w-full flex gap-4 py-7 justify-center flex-wrap">
        {JobCategories.map((curr, index) => {
          return <CategoryItem value={curr} key={index} />;
        })}
      </div>
    </>
  );
};

export default Search;
