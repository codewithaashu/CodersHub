import React from "react";
import { Card, CardContent } from "../ui/card";
import EventDetailsCard from "./EventDetailsCard";
import { Tabs, TabsContent } from "../ui/tabs";
import EventDescription from "./EventDescription";
import EventDetailsNavigation from "./EventDetailsNavigation";
import EventComments from "./EventComments";

const EventDetailsContainer = () => {
  return (
    <>
      <Card className="md:col-span-3 col-span-4 py-5">
        <CardContent className="flex flex-col gap-2 p-4 md:p-6">
          <EventDetailsCard />
          {/* Navigation */}
          <Tabs
            defaultValue="description"
            className="flex flex-col gap-0 w-full rounded-lg"
          >
            <EventDetailsNavigation />

            <TabsContent value="description">
              <EventDescription />
            </TabsContent>
            <TabsContent value="discussion">
              <EventComments />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default EventDetailsContainer;
