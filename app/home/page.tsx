import React from "react";
import HeroSection from "@/components/marketing/Hero-Section";
import LatestMembersSection from "@/components/marketing/LatestMembers-Section";
import RecentContainerAvailability from "@/components/marketing/RecentContainerAvailability";
import StayUpdatedSection from "@/components/marketing/StayUpdated-Section";
import WhyJoinSection from "@/components/marketing/WhyJoin-Section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyJoinSection />
      <RecentContainerAvailability />
      <LatestMembersSection />
      <StayUpdatedSection />
    </>
  );
};

export default HomePage;
