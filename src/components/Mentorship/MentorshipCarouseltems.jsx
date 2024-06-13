import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MentorsCard from "./MentorsCard";
const MentorshipCarouseltems = () => {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full md:basis-1/3 lg:basis-1/4"
            >
              <div className="mx-3">
                <MentorsCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default MentorshipCarouseltems;
