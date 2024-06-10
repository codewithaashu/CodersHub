import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const NotesDetails = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 py-5 bg-muted "></div>
      <BottomTab />
    </>
  );
};

export default NotesDetails;
