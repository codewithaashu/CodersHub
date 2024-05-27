import React from "react";
import { DialogContent } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ConnectionItem from "./ConnectionItem";

const ConnectionModal = () => {
  return (
    <>
      <DialogContent className="sm:max-w-[425px] pb-8">
        <Tabs defaultValue="followers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-background">
            <TabsTrigger
              value="followers"
              className="text-primary text-sm font-medium flex flex-row justify-around data-[state=active]:bg-primary-foreground data-[state=active]:border-b-2 border-primary rounded-none"
            >
              <p className="text-[13px]">Followers</p>
              <p>420</p>
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="text-primary text-sm font-medium flex flex-row justify-around data-[state=active]:bg-primary-foreground data-[state=active]:border-b-2 border-primary rounded-none"
            >
              <p className="text-[13px]">Following</p>
              <p>5</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="followers" className="flex flex-col gap-2 py-1">
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
          </TabsContent>
          <TabsContent value="following" className="flex flex-col gap-2 -mt-2">
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
            <ConnectionItem />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </>
  );
};

export default ConnectionModal;
