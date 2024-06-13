import React from "react";
import mentorship from "../../assets/mentorship.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
const MentorshipHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-evenly w-full items-center flex-wrap p-5 md:px-0 gap-3 bg-muted py-5">
        <div className="flex flex-col gap-1 md:gap-2 order-2 md:order-1 w-full md:w-1/2">
          <div className="hidden md:flex text-xl md:text-3xl font-semibold">
            Navigating Your Path: Expert Mentorship and Guidance
          </div>
          <div className="flex md:hidden text-xl md:text-3xl font-semibold text-center">
            Navigating Your Path: Expert Mentorship and Guidance
          </div>
          <p className="text-sm font-normal text-muted-foreground text-center md:text-start">
            Empowering Your Journey with Insights and Support from your Senior.
            Illuminate Your Journey with Experienced Guidance and Insightful
            Wisdom. A Senior Mentorship Hub: Your Guiding Light
          </p>
          <div className="flex gap-5 py-3">
            <Button
              className="rounded-full border-2 border-primary"
              onClick={() => navigate("/explore-mentors")}
            >
              Find your Mentor &gt;
            </Button>
            <Button
              variant="outline"
              className="hover:bg-gray-50 rounded-full border-2 border-primary"
            >
              Be a Mentor
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 md:h-[320px] h-56">
          <img src={mentorship} alt="Banner" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default MentorshipHeader;
