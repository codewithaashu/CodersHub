import React from "react";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { pollOptions } from "@/DB/ProgrammingLang";
import { MdModeEdit } from "react-icons/md";

const PollBox = () => {
  return (
    <>
      <Card className="w-full py-2 border-[1px] border-gray-300 shadow-md rounded-md relative">
        <MdModeEdit className="bg-gray-400 rounded-full cursor-pointer p-1 text-xl absolute top-1 right-1 z-20" />
        <CardContent>
          <h1 className="text-base font-medium">Who is Ashish Singh?</h1>
          <div className="flex flex-col gap-2 pt-[10px]">
            {pollOptions.map((curr, index) => {
              return (
                <div className="flex items-center space-x-2" key={index}>
                  <Checkbox
                    id="terms"
                    className="rounded-full"
                    onCheckedChange={() => console.log(curr)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {curr}
                  </label>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PollBox;
