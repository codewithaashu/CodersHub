import React from "react";
import eventsBanner from "../../assets/eventsBanner.png";
const EventsHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly w-full items-center flex-wrap p-5 md:px-0 gap-3 bg-muted ">
        <div className="flex flex-col gap-1 md:gap-2 order-2 md:order-1 w-full md:w-1/2">
          <div className="hidden md:flex text-xl md:text-3xl font-semibold">
            Innovate, Learn, Connect: Your Gateway <br /> to Exciting Tech
            Events
          </div>
          <div className="flex md:hidden text-xl md:text-3xl font-semibold text-center">
            Innovate, Learn, Connect: Your Gateway <br /> to Exciting Tech
            Events
          </div>
          <p className="text-sm font-normal text-muted-foreground text-center md:text-start">
            Explore hackathons challenging you to push boundaries, coding
            competitions testing your mettle, webinars delivering cutting-edge
            insights, and workshops offering hands-on learning experiences.
          </p>
        </div>
        <div className="order-1 md:order-2 md:h-[300px] h-56">
          <img
            src={
              "https://d8it4huxumps7.cloudfront.net/uploads/images/657994d66eee4_competitions.png?d=1000x1000"
            }
            alt="Banner"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default EventsHeader;
