import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import EventsNavigation from "./EventsNavigation";

import EventsCard from "./EventsCard";
const EventsContainer = () => {
  return (
    <>
      <div className="px-5 md:container">
        <Tabs
          defaultValue="competitions"
          className="flex flex-col gap-5 w-full"
        >
          {/* Navigation Container */}
          <EventsNavigation />
          {/* Events card */}
          <TabsContent value="competitions" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </div>
          </TabsContent>
          <TabsContent value="hackathons" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <EventsCard />
              <EventsCard />
            </div>
          </TabsContent>
          <TabsContent value="workshops" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </div>
          </TabsContent>
          <TabsContent value="technical-events" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EventsContainer;
