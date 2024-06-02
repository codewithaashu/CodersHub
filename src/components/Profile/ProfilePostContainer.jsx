import React from "react";
import PostNavigation from "./PostNavigation";
import { Card } from "../ui/card";

const ProfilePostContainer = () => {
  return (
    <>
      <Card className="bg-background px-3 md:px-8 py-5">
        <h1 className="text-[17px] font-medium">Recent Activity</h1>
        <PostNavigation />
      </Card>
    </>
  );
};

export default ProfilePostContainer;
