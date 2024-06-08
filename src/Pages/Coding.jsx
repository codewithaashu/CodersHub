import Banner from "@/components/Coding/Banner";
import DsaSheetContainer from "@/components/Coding/DsaSheetContainer";
import LeaderBoard from "@/components/Coding/LeaderBoard";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Coding = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen  flex flex-col gap-3 pb-8 ">
        {/* Banner*/}
        <Banner />
        <div className="hidden px-10 md:grid grid-cols-4 gap-5 mt-5">
          {/*Jobs Container */}
          <DsaSheetContainer />
          {/* LeaderBoard */}
          <LeaderBoard />
        </div>
        <div className="md:hidden flex flex-col px-3">
          {/*Jobs Container */}
          <DsaSheetContainer />
          {/* LeaderBoard */}
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default Coding;
