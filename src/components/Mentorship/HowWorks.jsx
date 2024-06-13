import React from "react";
import searchMentors from "../../assets/searchMentors.png";
import booking from "../../assets/booking.png";
import meeting from "../../assets/meeting.png";
const HowWorks = () => {
  return (
    <>
      <div className="flex flex-col px-5 md:container gap-5">
        <div className="flex flex-col gap-0 items-center">
          <p className="uppercase text-sm text-muted-foreground">
            How it works
          </p>
          <div className="text-lg font-semibold">
            Get Started Mentorship in 3 Easy Steps
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-0 items-center">
            <img
              src={searchMentors}
              alt="Search Mentors"
              className="h-24 md:h-32"
            />
            <div className="text-sm md:text-[15px] font-semibold pt-1">
              Find Your Ideal Senior
            </div>
            <p className="text-xs md:text-[13px] text-muted-foreground text-start md:text-center">
              Choose your ideal Senior according to your preference and
              aspiration.
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center">
            <img src={booking} alt="Search Mentors" className="h-24 md:h-32" />
            <div className="text-sm md:text-[15px] font-semibold pt-1">
              Book a Online Session
            </div>
            <p className="text-xs md:text-[13px] text-muted-foreground text-start md:text-center">
              Connect with your Senior and ask your doubts
            </p>
          </div>
          <div className="flex flex-col gap-0 items-center">
            <img src={meeting} alt="Search Mentors" className="h-24 md:h-32" />
            <div className="text-sm md:text-[15px] font-semibold pt-1">
              Start One : One Mentorship
            </div>
            <p className="text-xs md:text-[13px] text-muted-foreground text-start md:text-center">
              Get personalized guidance and support from your Senior.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWorks;
