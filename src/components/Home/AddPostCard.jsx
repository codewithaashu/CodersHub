import React from "react";
import { Card, CardContent } from "../ui/card";
import AvatarComponent from "@/shareable/AvatarComponent";
import { TypeAnimation } from "react-type-animation";
import { Dialog, DialogTrigger } from "../ui/dialog";
import CreatePostModal from "./CreatePostModal";
import { useNavigate } from "react-router-dom";
const AddPostCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="pt-5">
        <CardContent className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-4 border-b-[1px] pb-3 cursor-pointer">
            <div
              className="cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <AvatarComponent
                className="w-10 h-10"
                imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
              />
            </div>
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
          <div className="grid grid-cols-3 justify-between gap-x-5 md:gap-x-0">
            <div className="flex flex-row gap-2 items-center text-[13px] font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-start">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10485/10485057.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center text-xs leading-[14px]">
                Share Thoughts
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center text-[13px] leading-3 font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942802.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center mt-1 text-xs leading-[14px]">
                Ask Doubts
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center text-[13px] leading-3 font-normal hover:bg-primary-foreground w-fit p-2 rounded-md shadow-sm cursor-pointer justify-self-end">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1322/1322236.png"
                alt="Icon"
                className="h-5 w-5"
              />
              <p className="self-center text-xs leading-[14px]">
                Share Experience
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AddPostCard;
