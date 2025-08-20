"use client";

import Image from "next/image";
import SectionHeader from "../ui/section-header";

export default function AboutIndLogNetwork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            title="About INDLOG NETWORK"
            description="INDLOG NETWORK is a pioneering digital platform built to seamlessly connect NVOCCs (Non-Vessel Operating Common Carriers) and Freight Forwarders across the globe."
            align="left"
            descriptionClassName="text-muted-foreground"
          />

          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Founded as a visionary venture by{" "}
            <span className="font-semibold">MFA Network Inc.</span>, INDLOG is
            driven by a singular mission — to unify the logistics ecosystem
            through smart connectivity, transparency, and real-time
            collaboration.
          </p>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="relative w-[410px] h-[330px]">
            <Image
              src="/contact/aboutIndlog.webp"
              alt="About INDLOG NETWORK"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
