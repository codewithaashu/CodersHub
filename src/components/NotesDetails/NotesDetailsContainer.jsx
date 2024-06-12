import React from "react";
import RecommededNotes from "./RecommededNotes";
import NotesDetailsHeader from "./NotesDetailsHeader";
import NotesView from "./NotesView";

const NotesDetailsContainer = () => {
  return (
    <>
      <div className=" container flex flex-row gap-5 justify-between ">
        <div className="flex flex-col gap-5">
          <NotesDetailsHeader />
          <NotesView />
        </div>
        <RecommededNotes />
      </div>
    </>
  );
};

export default NotesDetailsContainer;
