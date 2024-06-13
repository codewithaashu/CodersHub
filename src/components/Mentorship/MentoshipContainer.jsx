import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import HowWorks from "./HowWorks";
import MentorshipNavigation from "./MentorshipNavigation";
import MentorshipCarouseltems from "./MentorshipCarouseltems";

const MentoshipContainer = () => {
  return (
    <>
      <>
        <div className="py-5">
          <HowWorks />
          <Tabs
            defaultValue="How to Start"
            className="flex flex-col gap-5 w-full mt-8 bg-muted items-center p-5"
          >
            <div className="flex flex-col gap-0 items-center my-2">
              <div className="text-xl font-semibold  text-center">
                Choose your ideal Senior and Start 1:1 Mentorship Session
              </div>
              <p className="text-sm text-muted-foreground">
                Illuminate Your Journey with Experienced Guidance and Insightful
                wisdom
              </p>
            </div>
            {/* Navigation Container */}
            {<MentorshipNavigation />}
            {/* Events card */}
            <TabsContent value="How to Start" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="Placement Prep" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent
              value="College Exam Prep"
              className="w-10/12 md:w-11/12"
            >
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="DSA Guidance" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="Web Development" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="App Development" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="Data Analaytics" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
            <TabsContent value="Data Science" className="w-10/12 md:w-11/12">
              <MentorshipCarouseltems />
            </TabsContent>
          </Tabs>
        </div>
      </>
    </>
  );
};

export default MentoshipContainer;
