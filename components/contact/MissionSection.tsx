"use client";

import { cn } from "@/lib/utils";
import TextH1 from "../typography/TextH1";
import TextP from "../typography/TextP";

export default function MissionSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "bg-white py-20 flex flex-col items-center text-center",
        className
      )}
    >
      <TextH1 className="mb-6">
        Our Mission: Seamless Freight Collaboration
      </TextH1>
      <TextP className="max-w-3xl text-base sm:text-lg md:text-xl mb-6">
        In a rapidly evolving global trade environment, INDLOG serves as the
        only network that truly bridges the gap between container providers and
        freight handlers.
      </TextP>
      <TextP>
        We empower logistics professionals to find, book, and manage container
        capacity from verified NVOCCs with unmatched ease and efficiency.
      </TextP>
    </section>
  );
}
