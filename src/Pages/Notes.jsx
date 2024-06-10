import NotesContainer from "@/components/Notes/NotesContainer";
import NotesHeader from "@/components/Notes/NotesHeader";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Notes = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 py-5 bg-muted ">
        <NotesHeader />
        <NotesContainer />
      </div>
      <BottomTab />
    </>
  );
};

export default Notes;
