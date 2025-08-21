"use client";

import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import Image from "next/image";

const highlights = [
  "Live container listings updated daily",
  "One global dashboard, zero silos",
  "Built with security & scalability in mind",
  "Supported by global logistics community",
  "Trusted, transparent connections",
  "Quick messaging & profile views",
];

export default function PlatformHighlightsSection() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center text-center px-6">
      <TextH3 className="mb-12">Key Platform Highlights</TextH3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {highlights.map((point, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image
              src={"/contact/tick.svg"}
              alt="point"
              width={24}
              height={24}
            />
            <TextP className="text-left">{point}</TextP>
          </div>
        ))}
      </div>
    </section>
  );
}
