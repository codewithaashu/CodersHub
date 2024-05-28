import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Switch } from "../ui/switch";
import { FaUsers } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdCommentsDisabled } from "react-icons/md";
import { Button } from "../ui/button";
const PostSettings = () => {
  const [state, setState] = useState("");
  const [formData, setFormData] = useState({
    anonymously: false,
    postControl: "Anyone",
    commentControl: "Anyone",
  });
  return (
    <>
      <DialogContent className="sm:max-w-[425px] pb-5 pt-4">
        <DialogHeader className="border-b-[1px] pb-2">
          <DialogTitle className="text-lg">Post Settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-600 font-medium">
              Post Anonymously
            </p>
            <Switch
              checked={formData.anonymously}
              onCheckedChange={() =>
                setFormData({ ...formData, anonymously: !formData.anonymously })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 font-medium">
              Who can see your post?
            </p>
            <div className="flex flex-row justify-between">
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.postControl === "Anyone" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, postControl: "Anyone" })
                }
              >
                <TbWorld />
                <p className="text-[13px] font-normal">Anyone</p>
              </div>
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.postControl === "Followers Only" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, postControl: "Followers Only" })
                }
              >
                <FaUsers />
                <p className="text-[13px] font-normal">Followers Only</p>
              </div>
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.postControl === "Only Me" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, postControl: "Only Me" })
                }
              >
                <FaLock />
                <p className="text-[13px] font-normal">Only Me</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 font-medium">
              Who can comment on your post?
            </p>
            <div className="flex flex-row justify-between">
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.commentControl === "Anyone" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, commentControl: "Anyone" })
                }
              >
                <TbWorld />
                <p className="text-[13px] font-normal">Anyone</p>
              </div>
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.commentControl === "Followers Only" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, commentControl: "Followers Only" })
                }
              >
                <FaUsers />
                <p className="text-[13px] font-normal">Followers Only</p>
              </div>
              <div
                className={`flex flex-row gap-2 items-center border-[1px] rounded-md p-1 px-2 shadow-sm  ${
                  formData.commentControl === "No one" ? "bg-muted" : ""
                } cursor-pointer`}
                onClick={() =>
                  setFormData({ ...formData, commentControl: "No one" })
                }
              >
                <MdCommentsDisabled />
                <p className="text-[13px] font-normal">No one</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end pt-2">
          <Button className="w-fit">Save</Button>
        </div>
      </DialogContent>
    </>
  );
};

export default PostSettings;
