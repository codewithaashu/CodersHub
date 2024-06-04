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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import EmojiPicker from "emoji-picker-react";
import DocumentBox from "../Post/DocumentBox";
import MediaBox from "../Post/MediaBox";
import CodeBox from "../Post/CodeBox";
import PollBox from "../Post/PollBox";
import PostSettings from "../Post/PostSettings";
import PollModalContainer from "../Post/PollModalContainer";
import { PiTextTBold } from "react-icons/pi";
import CustomEditor from "@/shareable/CustomEditor";

const CreatePostModal = () => {
  const [text, setText] = useState("");
  const [imageBox, setImageBox] = useState(false);
  const [documentBox, setDocumentBox] = useState(false);
  const [codeBox, setCodeBox] = useState(false);
  const [pollBox, setPollBox] = useState(false);
  const [poll, setPoll] = useState(null);
  const [textFormatBox, setTextFormatBox] = useState(false);
  const handleWritePost = (e) => {
    setText(e.target.value);
    document.getElementById("textarea").style.height = "auto";
    document.getElementById("textarea").style.height =
      document.getElementById("textarea").scrollHeight + "px";
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
        <div className="w-full pt-2 flex flex-col gap-4 max-h-[720px] overflow-y-auto ">
          <div className="flex flex-col gap-3">
            {textFormatBox ? (
              <CustomEditor />
            ) : (
              <textarea
                className="resize-none border-none outline-none w-full p-2 text-sm font-normal overflow-y-auto scroll-smooth"
                id="textarea"
                placeholder="Describe what's on your mind..."
                rows={`${imageBox || documentBox || codeBox || poll ? 4 : 12}`}
                value={text}
                onChange={handleWritePost}
              ></textarea>
            )}
            {imageBox && <MediaBox />}
            {documentBox && <DocumentBox />}
            {codeBox && <CodeBox />}
            {pollBox && poll && <PollBox />}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center border-[1px] rounded-md shadow-sm p-1 px-3">
            <p className="text-sm font-medium">Add to your post</p>
            <div className="flex flex-row gap-2 md:gap-4">
              {/* Photos */}
              <IoMdPhotos
                className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                  imageBox ? "bg-gray-300 shadow-sm " : ""
                }`}
                onClick={() => setImageBox(!imageBox)}
              />

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

              {/* Code */}
              <IoCodeSlash
                className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                  codeBox ? "bg-gray-300 shadow-sm " : ""
                }`}
                onClick={() => setCodeBox(!codeBox)}
              />

              {/* Document */}
              <IoDocumentTextOutline
                className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                  documentBox ? "bg-gray-300 shadow-sm " : ""
                }`}
                onClick={() => setDocumentBox(!documentBox)}
              />

              {/* Poll */}
              <Dialog>
                <DialogTrigger asChild>
                  <MdBarChart
                    onClick={() => setPollBox(!pollBox)}
                    className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                      poll ? "bg-gray-300 shadow-sm " : ""
                    }`}
                  />
                </DialogTrigger>
                <PollModalContainer setPoll={setPoll} poll={poll} />
              </Dialog>
              {/* Text Formatting */}
              <PiTextTBold
                className={`text-xl font-medium cursor-pointer h-7 w-7 p-1 rounded-full ${
                  textFormatBox ? "bg-gray-300 shadow-sm " : ""
                }`}
                onClick={() => setTextFormatBox(!textFormatBox)}
              />
            </div>
          </div>
          {/* <div>
          <p className="text-[13px] font-medium">Hashtags:</p>
          <input type="text" />
        </div> */}
          <Button className="text-[15px] ">Post</Button>
        </div>
      </DialogContent>
    </>
  );
};

export default CreatePostModal;
