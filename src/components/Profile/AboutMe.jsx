import React from "react";
import { Card } from "../ui/card";
import SocialProfile from "./SocialProfile";
import { Separator } from "../ui/separator";

const AboutMe = () => {
  return (
    <>
      <Card className="p-5 pt-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[17px] font-semibold">About Me</h1>
          <p className="text-[13px] text-muted-foreground leading-[18px]">
            Hello Everyone, I am Software Developer. I am pursuing MCA from LNCT
            Group of College,Bhopal.
          </p>
        </div>
        <Separator className="my-2" />
        <SocialProfile />
      </Card>
    </>
  );
};

export default AboutMe;
