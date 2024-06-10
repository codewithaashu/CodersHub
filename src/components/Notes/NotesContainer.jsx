import React from "react";
import NotesNavigation from "./NotesNavigation";
import NotesCard from "./NotesCard";
import { Tabs, TabsContent } from "../ui/tabs";
import SelectComponent from "@/shareable/SelectComponent";
import { IoSearchSharp } from "react-icons/io5";

const NotesContainer = () => {
  return (
    <>
      <div className="px-5 md:container">
        <Tabs defaultValue="notes" className="flex flex-col gap-0 w-full">
          {/* Navigation Container */}
          <NotesNavigation />
          {/* Sort By */}
          <div className="flex md:justify-between justify-center my-5">
            {/* Search */}
            <div className="flex p-[10px] px-3 rounded-lg border-2 bg-background items-center gap-3 md:w-3/4 w-full">
              <IoSearchSharp />
              <input
                type="text"
                placeholder="Search notes,cheatsheet and books..."
                className="outline-none text-sm font-normal text-gray-800 placeholder:font-normal"
              />
            </div>
            {/* Sort by Dropdown */}
            <SelectComponent
              selectBtnStyle={"w-[180px] font-medium hidden md:flex"}
              placeholder={"Sort By"}
              selectItems={["Relevance", "Popularity", "Newest"]}
              itemStyle={"text-sm"}
            />
          </div>
          {/* Notes card */}
          <TabsContent value="notes" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <NotesCard />
              <NotesCard />
              <NotesCard />
            </div>
          </TabsContent>
          <TabsContent value="handwritten-notes" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <NotesCard />
              <NotesCard />
            </div>
          </TabsContent>
          <TabsContent value="cheatsheet" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <NotesCard />
              <NotesCard />
              <NotesCard />
              <NotesCard />
            </div>
          </TabsContent>
          <TabsContent value="books" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <NotesCard />
              <NotesCard />
              <NotesCard />
              <NotesCard />
              <NotesCard />
              <NotesCard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default NotesContainer;
