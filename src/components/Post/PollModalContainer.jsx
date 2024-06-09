import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import TwoColumnsInput from "@/shareable/TwoColumnsInput";
import { pollOptions } from "@/DB/ProgrammingLang";
import { Switch } from "../ui/switch";

import SelectComponent from "@/shareable/SelectComponent";

const PollModalContainer = ({ setPoll, poll }) => {
  const [quizmode, setQuizMode] = useState(false);
  const [select, setSelect] = useState("");

  return (
    <>
      <DialogContent className="sm:max-w-[425px] p-5">
        <DialogHeader>
          <DialogTitle className="text-xl leading-5">Create Poll</DialogTitle>
          <DialogDescription className="text-[13px] text-gray-400 leading-[14px]">
            Create a poll to get feedback from your audience.
          </DialogDescription>
        </DialogHeader>
        <Separator className="-my-1" />
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Poll Question</Label>
          <Input
            type="text"
            id="text"
            placeholder="Ask a Question"
            onChange={(e) => setPoll({ ...poll, question: e.target.value })}
          />
        </div>
        <div className="grid gap-2 px-1">
          {pollOptions.map((curr, index) => {
            return (
              <TwoColumnsInput
                label={curr}
                placeholder={"Type option here..."}
                key={index}
                setPoll={setPoll}
                poll={poll}
                field={`option${index + 1}`}
              />
            );
          })}
        </div>
        <Separator className="my-1" />
        <div className="flex flex-row items-center justify-between px-1">
          <h1 className="text-sm font-medium">Quiz Mode</h1>
          <Switch
            checked={quizmode}
            onCheckedChange={() => {
              setQuizMode(!quizmode);
              setPoll({ ...poll, quizMode: !quizmode });
            }}
          />
        </div>
        {quizmode && (
          <SelectComponent
            placeholder={"Choose correct option"}
            selectBtnStyle={"w-full text-sm"}
            itemStyle={"text-[13px]"}
            selectItems={pollOptions}
            setSelect={setSelect}
          />
        )}
        <DialogFooter className="pt-2">
          <Button type="submit" onClick={() => console.log(poll)}>
            Create Poll
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default PollModalContainer;
