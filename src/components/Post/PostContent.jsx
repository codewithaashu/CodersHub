import React from "react";
import { Separator } from "../ui/separator";

const PostContent = () => {
  return (
    <>
      <div className="flex flex-col gap-2 py-3">
        {/* Paragraph */}
        <p className="text-[13.5px] font-normal  leading-[22px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          adipisci alias praesentium eius eveniet! Iure eius eveniet ut!
          Voluptate quia facere culpa commodi, hic quasi excepturi recusandae
          soluta sequi voluptatum, dolorum impedit repudiandae distinctio.
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
    </>
  );
};

export default PostContent;
