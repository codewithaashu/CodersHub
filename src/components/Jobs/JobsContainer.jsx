import React from "react";
import JobsNavigation from "./JobsNavigation";
import { Tabs, TabsContent } from "../ui/tabs";
import JobsCard from "./JobsCard";
import { Card } from "../ui/card";
import SelectComponent from "@/shareable/SelectComponent";

const JobsContainer = () => {
  return (
    <>
      <Card className="p-4 md:p-5 flex flex-col w-full">
        <Tabs
          defaultValue="opportunities"
          className="flex flex-col gap-0 w-full items-center"
        >
          {/* Navigation Container */}
          <JobsNavigation />
          {/* Sort By */}
          <div className="self-end">
            <SelectComponent
              placeholder={"Sort By"}
              selectBtnStyle={"w-[120px] h-fit py-[6px] text-[13px]"}
              itemStyle={"text-xs"}
              selectItems={["Newest", "Relevance", "Popularity", "Verified"]}
            />
          </div>
          {/* Jobs card */}
          <TabsContent value="opportunities" className="w-full">
            <div className="md:p-5 p-0 grid md:grid-cols-3 grid-cols-1 gap-5">
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
            </div>
          </TabsContent>
          <TabsContent value="jobs" className="w-full">
            <div className="md:p-5 p-0 grid md:grid-cols-3 grid-cols-1 gap-5">
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
            </div>
          </TabsContent>
          <TabsContent value="internship" className="w-full">
            <div className="md:p-5 p-0 grid md:grid-cols-3 grid-cols-1 gap-5">
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
              <JobsCard />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default JobsContainer;
