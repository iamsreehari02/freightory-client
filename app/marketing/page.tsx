import Footer from "@/components/marketing/Footer";
import Header from "@/components/marketing/Header";
import HeroSection from "@/components/marketing/Hero-Section";
import LatestMembersSection from "@/components/marketing/LatestMembers-Section";
import StayUpdatedSection from "@/components/marketing/StayUpdated-Section";
import WhyJoinSection from "@/components/marketing/WhyJoin-Section";

export default function MarketingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyJoinSection />
      <LatestMembersSection />
      <StayUpdatedSection />
      <Footer />
    </>
  );
}
