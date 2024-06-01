import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import AvatarComponent from "@/shareable/AvatarComponent";
import { TiSpannerOutline } from "react-icons/ti";
import PostSettings from "./PostSettings";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const RepostBox = () => {
  const [text, setText] = useState("");
  const handleWritePost = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <DialogContent className="sm:max-w-[425px] md:max-w-[540px] h-fit max-h-[75vh] pb-8 overflow-y-auto flex flex-col ">
        <div className="bg-muted rounded-md p-2 h-fit flex flex-row gap-3 w-fit items-center border-b-[1px] shadow-sm">
          <AvatarComponent
            className="w-8 h-8 "
            imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
          />
          <div className="flex flex-col gap-0">
            <p className="text-[13px] font-medium text-primary">
              Ashish Ranjan
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row items-center justify-center -mt-[3px] cursor-pointer gap-[2px]">
                  <p className="text-[10px] font-normal text-gray-500">
                    Post Settings
                  </p>
                  <TiSpannerOutline className="text-gray-700 text-[11px]" />
                </div>
              </DialogTrigger>
              <PostSettings />
            </Dialog>
          </div>
        </div>
        {/* TextArea */}
        <div className="w-full pt-2 flex flex-col gap-3 max-h-[720px] overflow-y-auto ">
          <div>
            {/* TextArea */}
            <textarea
              className="resize-none border-none outline-none w-full p-2 text-sm font-normal overflow-y-auto scroll-smooth"
              placeholder="Say something about this..."
              rows={3}
              value={text}
              onChange={handleWritePost}
            ></textarea>
          </div>
          {/* Post */}
          <Card className="h-full py-1 mx-2">
            <CardContent className="p-[14px]">
              {/* Header */}
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <AvatarComponent
                    className="w-12 h-12 "
                    imgSrc="https://github.com/shadcn.png"
                  />
                  <div className="flex flex-col gap-0">
                    <p className="text-[15px] font-medium leading-5">
                      Ashish Singh
                    </p>
                    <p className="text-xs font-normal my-0 text-muted-foreground">
                      LNCT Group of College,Bhopal
                    </p>
                    <p className="text-[10px] font-normal text-muted-foreground -mt-[1px]">
                      2days ago
                    </p>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 py-3">
                {/* Paragraph */}
                <p className="text-[13.5px] font-normal  leading-[22px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam adipisci alias praesentium eius eveniet! Iure eius
                  eveniet ut! Voluptate quia facere culpa commodi, hic quasi
                  excepturi recusandae soluta sequi voluptatum, dolorum impedit
                  repudiandae distinctio.
                  <span className="text-primary text-sm font-medium cursor-pointer px-[6px]">
                    ... See More
                  </span>
                </p>
                {/* Media */}
                <Separator className="mb-1" />
                <div className="bg-transparent h-96 rounded-md flex justify-center">
                  <img
                    src="http://res.cloudinary.com/dycobmjyk/image/upload/v1714324259/Social%20Media/tyigshwfd6a57ob0wahb.jpg"
                    alt="Media Content"
                    // fill
                    className="rounded-md h-full object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Emoji */}
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <BsEmojiSmile className="text-xl font-medium cursor-pointer" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <EmojiPicker
              skinTonesDisabled
              searchDisabled
              suggestedEmojisMode="Frequent"
              width={"100%"}
              height={"340px"}
              previewConfig={{ showPreview: false }}
              onEmojiClick={(emoji) => setText(text + emoji.emoji)}
            />
          </PopoverContent>
        </Popover>

        <div className="flex flex-col gap-2 w-full">
          {/* <div>
          <p className="text-[13px] font-medium">Hashtags:</p>
          <input type="text" />
        </div> */}
          <Button className="text-[15px] w-full">Repost</Button>
        </div>
      </DialogContent>
    </>
  );
};

export default RepostBox;
