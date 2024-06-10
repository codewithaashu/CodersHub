import React from "react";
import notesBanner from "../../assets/notes.png";
const NotesHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly w-full items-center flex-wrap p-5 md:px-0 gap-3 bg-muted ">
        <div className="flex flex-col gap-1 md:gap-2 order-2 md:order-1 w-full md:w-1/2">
          <div className="hidden md:flex text-xl md:text-3xl font-semibold">
            Unlock Your Career Potential: <br /> Notes, Cheatsheet, and
            Essential Books Hub
          </div>
          <div className="flex md:hidden text-xl md:text-3xl font-semibold text-center">
            Unlock Your Career Potential: <br /> Notes, Cheatsheet, and
            Essential Books Hub
          </div>
          <p className="text-sm font-normal text-muted-foreground text-center md:text-start">
            Explore a plethora of notes,handwritten notes, cheatsheet, and
            indispensable books that work as catalyst in your placement
            preparation, ensuring you're equipped to excel in any field.
          </p>
        </div>
        <div className="order-1 md:order-2 md:h-[270px] h-52">
          <img
            src={
              "https://s-f.scribdassets.com/webpack/assets/images/browse_page_promo_module/S_docs.508568ca.png"
              //   notesBanner
            }
            alt="Banner"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default NotesHeader;
