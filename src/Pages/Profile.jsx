import AboutMe from "@/components/Profile/AboutMe";
import CodingStats from "@/components/Profile/CodingStats";
import CommunityStats from "@/components/Profile/CommunityStats";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfilePostContainer from "@/components/Profile/ProfilePostContainer";
import SocialProfile from "@/components/Profile/SocialProfile";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="hidden container py-5 md:grid grid-cols-9 gap-5">
        {/* Profile Info*/}
        <div className="flex flex-col gap-3 col-span-2">
          <ProfileHeader />
          <AboutMe />
        </div>
        {/* Profile Posts */}
        <div className="flex flex-col gap-3 col-span-5">
          <ProfilePostContainer />
        </div>
        {/* Stats */}
        <div className="flex flex-col  gap-3 col-span-2">
          <CommunityStats />
          <CodingStats />
        </div>
      </div>
      <div className="md:hidden m-2">
        {/* Posts */}
        <div className="flex flex-col gap-3">
          <ProfilePostContainer />
        </div>
      </div>
    </>
  );
};

export default Profile;
