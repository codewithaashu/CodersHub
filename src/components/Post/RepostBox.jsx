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
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

const RepostBox = () => {
  const [text, setText] = useState("");
  const handleWritePost = (e) => {
    setText(e.target.value);
    document.getElementById("repostText").style.height = "auto";
    document.getElementById("repostText").style.height =
      document.getElementById("repostText").scrollHeight + "px";
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
              className="resize-none border-none outline-none w-full p-2 text-sm font-normal overflow-hidden "
              placeholder="Say something about this..."
              rows={2}
              id="repostText"
              value={text}
              onChange={handleWritePost}
            ></textarea>
          </div>
          {/* Post */}
          <Card className="h-full py-1 mx-2">
            <CardContent className="p-[14px]">
              {/* Header */}
              <PostHeader />
              {/* Content */}
              <PostContent />
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
