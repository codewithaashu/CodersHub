import React from "react";
import EventsCard from "../Events/EventsCard";

const SimilarEvents = () => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-2 w-full">
        <div className="text-xl font-medium text-gray-800 px-2 ">
          Similar Events
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <EventsCard refer="EventDetails" />
          <EventsCard refer="EventDetails" />
          <EventsCard refer="EventDetails" />
          <EventsCard refer="EventDetails" />
        </div>
      </div>
    </>
  );
};

export default SimilarEvents;
