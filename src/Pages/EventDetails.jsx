import EventDetailsContainer from "@/components/EventDetails/EventDetailsContainer";
import SimilarEvents from "@/components/EventDetails/SimilarEvents";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const EventDetails = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-muted md:py-5">
        <div className="container grid grid-cols-4 gap-8 py-5 px-3">
          <EventDetailsContainer />
          <SimilarEvents />
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default EventDetails;
