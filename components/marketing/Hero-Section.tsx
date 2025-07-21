"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TextP from "../typography/TextP";
import TextH1 from "../typography/TextH1";

export default function HeroSection({ className }: { className?: string }) {
  return (
    <section className={cn(" bg-white py-12 md:py-20", className)}>
      <div className="mx-auto px-6 grid max-w-7xl grid-cols-1 items-center gap-12   md:grid-cols-2">
        <div className="space-y-6 text-left">
          <TextH1 className="whitespace-pre-line ">
            <span className="text-primary">GLOBAL</span>
            {"\nFREIGHT\nFORWARDERS"}
          </TextH1>
          <TextP className="mx-auto md:mx-0 max-w-prose text-base sm:text-lg md:text-xl">
            Connecting logistics leaders worldwide through a verified network of
            freight forwarders, NVOCCs, and shipping professionals. Join
            thousands of trusted partners.
          </TextP>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button size="lg">Join Now</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full md:h-[500px]">
          <Image
            src="/marketing/hero-image.webp"
            alt="Hero"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
