"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import SectionHeader from "@/components/ui/section-header";
import MembersCard from "../ui/members-card";
import { cn, latestMembers } from "@/lib/utils";

export default function LatestMembersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl px-6 mx-auto">
        <SectionHeader
          title="Meet Our Latest Members"
          description="Discover leading freight forwarders and logistics professionals who recently joined our network."
          className="mb-12 max-w-3xl"
        />

        <div ref={sliderRef} className="keen-slider">
          {latestMembers.map((member, index) => (
            <div className="keen-slider__slide" key={index}>
              <MembersCard {...member} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {latestMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSlide === index
                  ? "bg-primary w-10"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
