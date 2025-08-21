"use client";

import { Button } from "@/components/ui/button";
import TextH4 from "../typography/TextH4";
import TextP from "../typography/TextP";
import { ArrowRight } from "lucide-react";

export default function JoinNowSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl px-6 mx-auto">
        <div
          className="rounded-3xl bg-cover bg-center p-16 mx-auto flex flex-col items-center justify-center text-center gap-6"
          style={{
            backgroundImage: "url('/assets/landingPageBG.webp')",
          }}
        >
          <TextH4 className="text-white">
            Join us in redefining how the logistics world connects.
          </TextH4>

          <TextP className="text-white font-light text-md max-w-2xl">
            Whether you're an NVOCC or a Freight Forwarder, INDLOG is your
            gateway to seamless container collaboration.
          </TextP>

          <Button
            size="lg"
            onClick={() => {
              window.open("https://app.indlognetwork.com/register", "_blank");
            }}
          >
            Become a member now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
