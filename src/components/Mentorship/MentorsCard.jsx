import React from "react";
import { Card } from "../ui/card";
import AvatarComponent from "@/shareable/AvatarComponent";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import BookSessionContainer from "./BookSessionContainer";

const MentorsCard = () => {
  return (
    <>
      <Card className="p-5 w-full">
        <div className="flex justify-between">
          <AvatarComponent
            imgSrc={
              "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fmentor-profile%252FManish%2520Pushkar0.9941042546741938%3Falt%3Dmedia%26token%3Dd354c187-8be7-4314-9218-4646fd96839e&w=640&q=75"
            }
            className="h-20 w-20"
          />
          <div className="text-[13px] px-1 bg-yellow-100 text-yellow-600 w-fit h-fit rounded-full">
            ⭐ 4.8
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-lg font-semibold">Akash Kumar</div>
          <p className="text-sm text-muted-foreground -mt-[2px]">
            CSE 3rd Year Student
          </p>
        </div>
        <div className="flex justify-between py-2">
          <p className="text-xs bg-green-100 text-green-600 p-[2px] px-2 rounded-full">
            126 Mentees
          </p>
          <p className="text-xs bg-gray-100 text-gray-600 p-[2px]  rounded-full">
            23 Reviews
          </p>
        </div>
        <div className="flex gap-2 flex-wrap py-1">
          <p className="text-[13px] p-[2px] rounded-md border-[1px]  text-muted-foreground">
            Java
          </p>
          <p className="text-[13px] p-[2px] rounded-md border-[1px] text-muted-foreground">
            Python
          </p>
          <p className="text-[13px] p-[2px] rounded-md border-[1px] text-muted-foreground">
            Javascript
          </p>
          <p className="text-[13px] p-[2px] rounded-md border-[1px] text-muted-foreground">
            ReactJS
          </p>
          <p className="text-[13px] p-[2px] rounded-md border-[1px] text-muted-foreground">
            MERN Stack
          </p>
        </div>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-[13px] w-fit h-fit">Book Session</Button>
            </DialogTrigger>
            <BookSessionContainer />
          </Dialog>
        </div>
      </Card>
    </>
  );
};

export default MentorsCard;
