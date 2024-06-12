import React from "react";
import { Card, CardContent } from "../ui/card";
import JobDetailsCard from "./JobDetailsCard";
import { Tabs, TabsContent } from "../ui/tabs";
import JobDetailsNavigation from "./JobDetailsNavigation";
import JobDescription from "./JobDescription";
import JobComments from "./JobComments";
import CompanyDetails from "./CompanyDetails";

const JobDetailsContainer = () => {
  return (
    <>
      <Card className="col-span-3 py-5">
        <CardContent className="flex flex-col gap-2 p-4 md:p-6">
          <JobDetailsCard />
          {/* Navigation */}
          <Tabs
            defaultValue="description"
            className="flex flex-col gap-0 w-full rounded-lg"
          >
            <JobDetailsNavigation />

            <TabsContent value="description">
              <JobDescription />
            </TabsContent>
            <TabsContent value="company">
              <CompanyDetails />
            </TabsContent>
            <TabsContent value="discussions">
              <JobComments />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default JobDetailsContainer;
