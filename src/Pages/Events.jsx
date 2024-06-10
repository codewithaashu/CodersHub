import EventsContainer from "@/components/Events/EventsContainer";
import EventsHeader from "@/components/Events/EventsHeader";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Events = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 py-5 bg-muted ">
        <EventsHeader />
        <EventsContainer />
      </div>
      <BottomTab />
    </>
  );
};

export default Events;
