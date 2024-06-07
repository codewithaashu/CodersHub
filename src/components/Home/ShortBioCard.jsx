import React from "react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { IoLocationSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import AvatarComponent from "@/shareable/AvatarComponent";
import { useNavigate } from "react-router-dom";
const ShortBioCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="w-full pt-3">
        <CardContent>
          <div
            className="flex flex-row gap-3 items-center border-b-[1px] pb-2 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <AvatarComponent
              imgSrc={
                "http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
              }
              className="w-12 h-12"
            />
            <div className="flex flex-col gap-[1.5px]">
              <h1 className="text-base font-semibold leading-5">
                Ashish Singh
              </h1>
              <CardDescription className="text-[11px] font-medium">
                LNCT Group of College,Bhopal
              </CardDescription>
            </div>
          </div>
          <div className="py-2 flex flex-col gap-[6px] border-b-[1px]">
            <div className="flex flex-row items-center gap-[6px] text-muted-foreground">
              <IoLocationSharp className="text-sm text-primary" />
              <p className="text-xs font-medium">Bhopal,India</p>
            </div>
            <div className="flex flex-row items-center gap-[6px] text-muted-foreground">
              <MdWork className="text-sm text-primary" />
              <p className="text-xs font-medium">B.Tech 3rd Year Student</p>
            </div>
          </div>
          <div className="py-2 flex flex-col gap-1 border-b-[1px]">
            <div className="flex flex-row items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground cursor-pointer">
                Who viewed your profile
              </p>
              <p className="text-sm text-primary font-semibold">0</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-xs font-semibold text-primary ">
                Verified Account
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground cursor-pointer">
                Joined
              </p>
              <p className="text-[13px] text-primary font-medium">
                2 months ago
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col gap-1">
            <h1 className="text-[15px] font-semibold">Profile Stats</h1>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row justify-between text-[13px]">
                <p className="font-medium text-muted-foreground">
                  Post impressions
                </p>
                <p className="text-right text-primary font-semibold">2K</p>
              </div>
              <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
                Last Week{" "}
                <span className="px-1 text-primary font-medium">40</span>
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row justify-between text-[13px]">
                <p className="font-medium text-muted-foreground">Discuss</p>
                <p className="text-right text-primary font-semibold">5</p>
              </div>
              <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
                Last Week{" "}
                <span className="px-1 text-primary font-medium">0</span>
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row justify-between text-[13px]">
                <p className="font-medium text-muted-foreground">Solution</p>
                <p className="text-right text-primary font-semibold">90</p>
              </div>
              <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
                Last Week{" "}
                <span className="px-1 text-primary font-medium">5</span>
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row justify-between text-[13px]">
                <p className="font-medium text-muted-foreground">Rank</p>
                <p className="text-right text-primary font-semibold">1012</p>
              </div>
              <p className="text-[10px] font-normal text-muted-foreground -mt-[2px]">
                Monthly Rank{" "}
                <span className="px-1 text-primary font-medium">5</span>
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row justify-between text-[13px]">
                <p className="font-medium text-muted-foreground">Reputation</p>
                <p className="text-right text-primary font-semibold">
                  ⭐⭐⭐⭐
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ShortBioCard;
