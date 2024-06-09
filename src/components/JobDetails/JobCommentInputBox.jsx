import React, { useState } from "react";
import CustomEditor from "@/shareable/CustomEditor";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { PiTextTBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { IoMdPhotos } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import SelectComponent from "@/shareable/SelectComponent";
const JobCommentInputBox = () => {
  const [textFormatBox, setTextFormatBox] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const handleWritePost = (e) => {
    setText(e.target.value);
    document.getElementById("textarea").style.height = "auto";
    document.getElementById("textarea").style.height =
      document.getElementById("textarea").scrollHeight + "px";
  };
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <div className="w-full flex flex-col justify-between h-fit  border-[1px] rounded-lg overflow-y-auto p-[10px]">
          {/* TextArea */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between gap-3">
              {textFormatBox ? (
                <CustomEditor refer={"JobComment"} />
              ) : (
                <textarea
                  className="resize-none border-none outline-none w-full p-1 md:p-2 text-xs md:text-sm font-normal overflow-y-auto scroll-smooth min-h-24"
                  id="textarea"
                  placeholder="Add a comment, ask a question or share your experience & reviews..."
                  value={text}
                  onChange={handleWritePost}
                  onFocus={() => setInputFocus(true)}
                ></textarea>
              )}
              {inputFocus && (
                <SelectComponent
                  placeholder={"Comment Type"}
                  selectBtnStyle={"w-[120px] h-fit py-[6px] text-[13px]"}
                  itemStyle={"text-xs"}
                  selectItems={["All", "Question", "Experience", "Review"]}
                />
              )}
            </div>
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
          {inputFocus && (
            <div className="flex flex-row gap-2 ml-3 items-center">
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
              <PiTextTBold
                className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                  textFormatBox ? "bg-gray-300 shadow-sm " : ""
                }`}
                onClick={() => setTextFormatBox(!textFormatBox)}
              />

              <div className="w-full flex justify-end gap-3">
                <Button
                  variant="outline"
                  className="rounded-full text-[13px]"
                  onClick={() => setInputFocus(false)}
                >
                  Cancel
                </Button>
                <Button className="rounded-full text-[13px]">
                  Post{" "}
                  <span className="pl-2">
                    <IoSendSharp />
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobCommentInputBox;
