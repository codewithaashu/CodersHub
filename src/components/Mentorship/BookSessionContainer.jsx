import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";

const BookSessionContainer = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <DialogContent className="py-8 px-5">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center leading-4">
            Book Mentorship Session
          </DialogTitle>
          <DialogDescription className="text-[13px] text-muted-foreground text-center">
            Please make sure that you are available at specific date and time
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-[15px] font-medium">Select date </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit h-fit"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[15px] font-medium">Select time </div>
          <div className="flex flex-row gap-x-5 gap-y-3 flex-wrap">
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
            <div className="py-1 px-2 rounded-lg text-sm border-[1px] hover:bg-gray-50 cursor-pointer">
              6:30 PM
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button>Book Now</Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default BookSessionContainer;
