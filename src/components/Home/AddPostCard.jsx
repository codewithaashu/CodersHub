import React from "react";
import { Card, CardContent } from "../ui/card";
import AvatarComponent from "@/shareable/AvatarComponent";
import { TypeAnimation } from "react-type-animation";
import { Dialog, DialogTrigger } from "../ui/dialog";
import CreatePostModal from "./CreatePostModal";
const AddPostCard = () => {
  return (
    <>
      <Card className="pt-5">
        <CardContent className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-4 border-b-[1px] pb-3">
            <AvatarComponent
              className="w-10 h-10"
              imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
            />
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full bg-accent rounded-2xl px-4 h-fit py-2 cursor-pointer">
                  <TypeAnimation
                    sequence={[
                      "Share your thoughts...",
                      1000,
                      "Ask your doubts...",
                      1000,
                      "Post Anonymously...",
                      1000,
                      "Share your interview experience...",
                      1000,
                      "Share your work experience...",
                      1000,
                      "Share your college experience...",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "gray",
                      display: "inline-block",
                    }}
                  />
                </div>
              </DialogTrigger>
              <CreatePostModal />
            </Dialog>
          </div>
          <div className="grid grid-cols-3 justify-between">
            <div className="flex flex-row gap-2 items-center text-[13px] font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-start">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10485/10485057.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center">Share Thoughts</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-[13px] leading-3 font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942802.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center mt-1">Ask Doubts</p>
            </div>
            <div className="flex flex-row gap-2 items-center text-[13px] leading-3 font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-end">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1322/1322236.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center">Share Experience</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AddPostCard;
