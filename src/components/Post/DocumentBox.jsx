import React, { useState } from "react";
import { HiDocumentPlus } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";

const DocumentBox = () => {
  const [chooseDoc, setChooseDoc] = useState(null);
  //drag and drop feature
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "document/*": [".pdf"] },
    onDrop: (acceptedFiles) => {
      setChooseDoc(acceptedFiles[0]);
      console.log(acceptedFiles[0], chooseDoc);
    },
  });

  return (
    <>
      <div
        className=" border-[1px] rounded-md p-[6px]  h-[140px]  flex items-center justify-center relative"
        {...getRootProps()}
      >
        {!chooseDoc ? (
          <div className="flex flex-col justify-center items-center gap-1 bg-muted   w-full h-full rounded-md">
            <>
              <label>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  {...getInputProps()}
                  onChange={(e) => setChooseDoc(e.target.files[0])}
                />
                <HiDocumentPlus className="text-2xl rounded-full bg-gray-400 p-1 cursor-pointer" />
              </label>
              <p className="text-[13px] font-normal">Add Document</p>
              <p className="text-[10px] font-normal text-gray-400 -mt-[6px]">
                or Drag and Drop here
              </p>
            </>
          </div>
        ) : (
          <>
            <Button className="absolute top-2 right-2 p-0 h-5 w-5 rounded-full cursor-pointer">
              <MdDelete
                className="text-sm"
                onClick={() => setChooseDoc(null)}
              />
            </Button>
            <div className="flex flex-col items-center gap-0">
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/234/824/non_2x/pdf-icon-red-and-white-color-for-free-png.png"
                alt="Pdf"
                className="w-12 h-12"
              />
              <p className="text-xs font-medium">{chooseDoc?.name}</p>
              <p className="text-[10px] text-gray-400">
                Size : {(chooseDoc?.size / 1048576).toFixed(2)} MB
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DocumentBox;
