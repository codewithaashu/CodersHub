import React from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ConnectionItem from "./ConnectionItem";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ConnectionModal from "./ConnectionModal";

const ConnectionsCard = () => {
  return (
    <>
      <Card className=" pb-2">
        <Tabs defaultValue="followers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-border">
            <TabsTrigger
              value="followers"
              className="text-primary text-sm font-medium flex flex-row justify-around"
            >
              <p className="text-[13px]">Followers</p>
              <p>420</p>
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="text-primary text-sm font-medium flex flex-row justify-around"
            >
              <p className="text-[13px]">Following</p>
              <p>5</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="followers">
            <CardContent className="flex flex-col gap-2 py-1">
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-row justify-center">
                    <p className="text-sm text-primary font-medium hover:border-[1px] cursor-pointer p-1 px-2 rounded-md shadow-sm">
                      See More &gt;
                    </p>
                  </div>
                </DialogTrigger>
                <ConnectionModal activeTab={"followers"} />
              </Dialog>
            </CardContent>
          </TabsContent>
          <TabsContent value="following">
            <CardContent className="flex flex-col gap-2 py-1">
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <ConnectionItem />
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-row justify-center">
                    <p className="text-sm text-primary font-medium hover:border-[1px] cursor-pointer p-1 px-2 rounded-md shadow-sm">
                      See More &gt;
                    </p>
                  </div>
                </DialogTrigger>
                <ConnectionModal activeTab={"following"} />
              </Dialog>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default ConnectionsCard;
