import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const DsaSheetCard = ({ imgSrc, heading, content }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="w-[320px] cursor-pointer flex flex-col gap-0 py-5 px-3 items-center hover:border-gray-400 justify-self-center "
        onClick={() => navigate("/dsa-sheet")}
      >
        <div className="self-center w-[104px] h-[104px] mb-3">
          <img
            src={imgSrc}
            alt="Youtuber"
            className="rounded-full object-cover center h-full w-full"
          />
        </div>
        <div className="text-lg font-semibold py-1">{heading}</div>
        <p className="text-[13px] text-muted-foreground w-full text-center">
          {content}
        </p>
        <Button className="mt-4">Start Now</Button>
      </Card>
    </>
  );
};

export default DsaSheetCard;
