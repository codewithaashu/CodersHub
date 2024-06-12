import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoMdPhotos } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

const EventCommentInputBox = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const handleWritePost = (e) => {
    setText(e.target.value);
    document.getElementById("textarea").style.height = "auto";
    document.getElementById("textarea").style.height =
      document.getElementById("textarea").scrollHeight + "px";
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full flex items-start justify-between h-fit  border-[1px] rounded-lg overflow-y-auto p-[10px]">
          {/* TextArea */}
          <div className="flex flex-col w-full gap-2">
            <textarea
              id="textarea"
              placeholder="Add a comment"
              rows={1}
              className="outline-none border-none w-full resize-none overflow-hidden text-sm "
              onChange={handleWritePost}
            ></textarea>
            {image && (
              <div className="relative w-32 max-h-32 h-fit overflow-y-hidden rounded-md">
                <Button className="absolute top-1 right-2 p-0 h-5 w-5 rounded-full cursor-pointer ">
                  <MdDelete
                    className="text-sm"
                    onClick={() => setImage(null)}
                  />
                </Button>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Media"
                  className="w-fit h-fit rounded-md"
                />
              </div>
            )}
          </div>
          {/* Button */}
          <div className="flex flex-row gap-2 ml-3">
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
            {!image && (
              <label>
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg, .jpeg, .png,.avif"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <IoMdPhotos className="text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full" />
              </label>
            )}
          </div>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-3">
            <IoSendSharp />
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCommentInputBox;
