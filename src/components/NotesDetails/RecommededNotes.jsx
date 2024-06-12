import React from "react";
import NotesCard from "../Notes/NotesCard";

const RecommededNotes = () => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-5">
        <div className="text-xl font-semibold ">You might also like</div>
        <div className="flex flex-col gap-5">
          <NotesCard refer={"recommeded"} />
          <NotesCard refer={"recommeded"} />
          <NotesCard refer={"recommeded"} />
        </div>
      </div>
    </>
  );
};

export default RecommededNotes;
