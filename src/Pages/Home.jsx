import HomeComponent from "@/components/Home/HomeComponent";
import BottomTab from "@/shareable/BottomTab";
import Header from "@/shareable/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <div className=" w-full min-h-screen bg-muted">
        <Header />
        <HomeComponent />
        <BottomTab />
      </div>
    </>
  );
};

export default Home;
