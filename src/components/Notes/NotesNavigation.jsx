import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { FaBook, FaRegFilePdf } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
const NotesNavigation = () => {
  return (
    <>
      <TabsList className="flex flex-row gap-3 justify-start md:w-fit bg-transparent md:bg-gray-200 overflow-x-auto  h-fit px-4 py-2 rounded-none md:rounded-full">
        <TabsTrigger
          value="notes"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <FaRegFilePdf className="text-sm md:text-[15px]" />
          </span>
          Notes
        </TabsTrigger>
        <TabsTrigger
          value="handwritten-notes"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <GiNotebook className="text-sm md:text-[15px]" />
          </span>
          Handwritten Notes
        </TabsTrigger>
        <TabsTrigger
          value="cheatsheet"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <GrNotes className="text-sm md:text-[15px]" />
          </span>
          Cheatsheet
        </TabsTrigger>
        <TabsTrigger
          value="books"
          className="rounded-full data-[state=active]:bg-background data-[state=active]:text-primary w-fit hover:bg-gray-50 text-primary"
        >
          <span className="py-1 md:p-[6px]">
            <FaBook className="text-sm md:text-[15px]" />
          </span>
          Books
        </TabsTrigger>
      </TabsList>
    </>
  );
};

export default NotesNavigation;
