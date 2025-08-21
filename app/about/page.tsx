import AboutIndLogNetwork from "@/components/contact/AboutIndLogNetwork";
import HeroSection from "@/components/contact/HeroSection";
import JoinNowSection from "@/components/contact/JoinNowSection";
import MissionSection from "@/components/contact/MissionSection";
import PlatformHighlightsSection from "@/components/contact/PlatformHighlights";
import WhyIndlog from "@/components/contact/WhyIndlog";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutIndLogNetwork />
      <MissionSection />
      <WhyIndlog />
      <PlatformHighlightsSection />
      <JoinNowSection />
    </div>
  );
};

export default ContactUsPage;
