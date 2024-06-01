import React, { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";

const MediaBox = () => {
  const [chooseImage, setChooseImage] = useState([]);
  const [api, setApi] = useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg", ".avif"] },
    onDrop: (acceptedFiles) => {
      setChooseImage([...chooseImage, acceptedFiles[0]]);
    },
  });

  return (
    <>
      <div
        className=" border-[1px] rounded-md p-[6px]  h-[200px] flex items-center justify-center"
        {...getRootProps()}
      >
        {chooseImage.length == 0 ? (
          <div className="flex flex-col justify-center items-center gap-1 bg-gray-200 w-full h-full rounded-md">
            <>
              <label>
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg, .jpeg, .png,.avif"
                  {...getInputProps()}
                  onChange={(e) =>
                    setChooseImage([...chooseImage, e.target.files[0]])
                  }
                />
                <MdAddAPhoto className="text-3xl rounded-full bg-gray-400 p-1 cursor-pointer" />
              </label>
              <p className="text-sm font-normal">Add Photos</p>
              <p className="text-[11px] font-normal text-gray-400 -mt-[6px]">
                or Drag and Drop here
              </p>
            </>
          </div>
        ) : (
          <Carousel setApi={setApi} className=" bg-gray-100">
            <CarouselContent className="max-h-[200px]">
              {chooseImage.map((curr, index) => (
                <CarouselItem key={index} className="relative">
                  <label className="absolute top-1 left-5 p-1 h-6 w-6 rounded-full cursor-pointer ">
                    <input
                      type="file"
                      className="hidden"
                      accept=".jpg, .jpeg, .png,.avif"
                      onChange={(e) =>
                        setChooseImage([...chooseImage, e.target.files[0]])
                      }
                    />
                    <MdAddAPhoto className="text-2xl rounded-full bg-primary text-primary-foreground p-1 cursor-pointer" />
                  </label>
                  <Button className="absolute top-1 right-2 p-0 h-6 w-6 rounded-full cursor-pointer ">
                    <MdDelete
                      className="text-base"
                      onClick={() =>
                        setChooseImage(
                          chooseImage.filter((img) => img !== curr)
                        )
                      }
                    />
                  </Button>
                  <img
                    src={URL.createObjectURL(curr) ?? " "}
                    alt="chooseImage"
                    className="w-full h-full object-contain rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {chooseImage.length > 1 && (
              <>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </>
            )}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default MediaBox;
