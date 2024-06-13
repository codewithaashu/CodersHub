import MentorshipHeader from "@/components/Mentorship/MentorshipHeader";
import MentoshipContainer from "@/components/Mentorship/MentoshipContainer";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Mentorship = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3">
        <MentorshipHeader />
        <MentoshipContainer />
      </div>
      <BottomTab />
    </>
  );
};

export default Mentorship;
