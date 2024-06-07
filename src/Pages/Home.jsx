import HomeComponent from "@/components/Home/HomeComponent";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-muted ">
        <HomeComponent />
      </div>
      <BottomTab />
    </>
  );
};

export default Home;
