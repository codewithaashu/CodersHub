import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaUserPlus, FaUserMinus } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillSendSlashFill } from "react-icons/bs";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ConnectionModal from "../Home/ConnectionModal";
const ProfileHeader = () => {
  return (
    <>
      <Card className="pb-5">
        <div className="flex flex-col gap-0 items-center">
          <img
            src="http://res.cloudinary.com/dycobmjyk/image/upload/v1714223036/Social%20Media/dd7mc4auffmjzubvw1vf.jpg"
            alt="Background"
            className="h-24 w-full object-cover relative rounded-t-md"
          />
          <div className="w-[70px] h-[70px] -mt-10 z-10">
            <img
              src="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
              alt="Profile"
              className="w-fit h-fit rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-[10px] gap-0">
          <div className="text-base font-medium leading-5">Ashish Ranjan</div>
          <p className="text-muted-foreground text-xs font-medium">
            Lnct Group of College
          </p>
          <p className="text-muted-foreground text-[11px] font-normal">
            Bhopal,India
          </p>
        </div>
        <div className="flex flex-row justify-center gap-5 py-1">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col gap-0 items-center p-2 hover:border-[1px] hover:rounded-md h-12 cursor-pointer shadow-sm">
                <p className="text-sm font-semibold leading-4">2</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
            </DialogTrigger>
            <ConnectionModal activeTab={"followers"} />
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col gap-0 items-center p-2 hover:border-[1px] hover:rounded-md h-12 cursor-pointer shadow-sm">
                <p className="text-sm font-semibold leading-4">1</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </DialogTrigger>
            <ConnectionModal activeTab={"following"} />
          </Dialog>
        </div>
        <div className="flex flex-row justify-around pt-3 items-center">
          <Button className="text-sm font-medium h-fit py-2 px-3 text-center flex flex-row items-center justify-center gap-[2px] ">
            <FaUserPlus />
            <p className="px-[2px]">Follow</p>
            {/* <FaUserMinus />
        <p className="px-[2px]">Unfollow</p> */}
          </Button>
          <Button
            variant="outline"
            className="text-sm font-medium h-fit py-2 px-2 w-fit text-center flex flex-row items-center justify-center gap-[2px] "
          >
            <RiSendPlaneFill />
            {/* <BsFillSendSlashFill /> */}
            <p className="px-[2px]">Message</p>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProfileHeader;
