"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeader from "../ui/section-header";

const HeroSection = () => {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/contact/truckBG.webp')" }} // replace with your image path
    >
      <div className="absolute inset-0 bg-black/60" /> {/* dark overlay */}
      <div className="relative z-10 text-center px-4">
        <SectionHeader
          title="INDLOG NETWORK"
          description="The Only Global Network Bridging NVOCCs & Freight Forwarders — Access Live Container Availability, Expand Reach, and Optimize Logistics. Powered by MFA Network INC."
          align="center"
          className="text-white"
          descriptionClassName="text-white/90"
        />

        <Button asChild size="lg" className="mt-6">
          <Link href="/login">Explore the Network</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
