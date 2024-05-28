import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AvatarComponent from "@/shareable/AvatarComponent";
import { TiSpannerOutline } from "react-icons/ti";
import { IoCodeSlash } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { Button } from "../ui/button";
import PostSettings from "./PostSettings";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import EmojiPicker from "emoji-picker-react";
const CreatePostModal = () => {
  const [text, setText] = useState("");
  const handleWritePost = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <DialogContent className="sm:max-w-[425px] md:max-w-[680px] pb-8 ">
        <div className="bg-muted rounded-md px-2 py-[6px] flex flex-row gap-3 w-fit items-center border-b-[1px] shadow-sm">
          <AvatarComponent
            className="w-10 h-10 "
            imgSrc="http://res.cloudinary.com/dycobmjyk/image/upload/v1714114731/Social%20Media/mebzkna2ttje2y7v1cze.jpg"
          />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold text-primary">Ashish Ranjan</p>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row items-center justify-center -mt-[3px] cursor-pointer gap-[2px]">
                  <p className="text-[11px] font-normal text-gray-500">
                    Post Settings
                  </p>
                  <TiSpannerOutline className="text-gray-700 text-xs" />
                </div>
              </DialogTrigger>
              <PostSettings />
            </Dialog>
          </div>
        </div>
        {/* TextArea */}
        <div className="w-full pt-2 flex flex-col gap-4">
          <textarea
            className="resize-none border-none outline-none w-full p-2 text-sm font-normal overflow-y-auto scroll-smooth"
            placeholder="Describe what's on your mind..."
            rows={10}
            value={text}
            onChange={handleWritePost}
          ></textarea>
          <div className="flex flex-row justify-between items-center border-[1px] rounded-md shadow-sm p-2 px-3">
            <p className="text-sm font-medium">Add to your post</p>
            <div className="flex flex-row gap-4">
              <IoMdPhotos className="text-xl font-medium cursor-pointer" />
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
              <IoCodeSlash className="text-xl font-medium cursor-pointer" />
              <IoDocumentTextOutline className="text-xl font-medium cursor-pointer" />
              <MdBarChart className="text-xl font-medium cursor-pointer" />
            </div>
          </div>
        </div>
        {/* <div>
          <p className="text-[13px] font-medium">Hashtags:</p>
          <input type="text" />
        </div> */}
        <Button className="text-[15px]">Post</Button>
      </DialogContent>
    </>
  );
};

export default CreatePostModal;
