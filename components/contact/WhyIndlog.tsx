"use client";

import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import FeatureBox from "@/components/FeatureBox";
import Badge from "../ui/badge";
import SectionHeader from "../ui/section-header";
import { whyIndlog } from "@/lib/utils";

export default function WhyIndlog() {
  return (
    <section className="w-full py-20 bg-[#FBFBFE]">
      <SectionHeader
        title="Why Logistics Professionals Choose INDLOG"
        className="mb-12 max-w-4xl"
      />

      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyIndlog.map((item, index) => (
          <FeatureBox
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
