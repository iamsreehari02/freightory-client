"use client";

import { Button } from "@/components/ui/button";
import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import { Input } from "../ui/input";
import TextH4 from "../typography/TextH4";
import Badge from "../ui/badge";
import { ArrowRight } from "lucide-react";

export default function StayUpdatedSection() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl px-6 mx-auto">
        <div
          className="rounded-3xl bg-cover bg-center p-13  mx-auto"
          style={{
            backgroundImage: "url('/assets/landingPageBG.webp')",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-4 text-white">
              <TextH4>
                Stay Updated. Stay <br />
                Ahead.
              </TextH4>
              <TextP className="text-white font-light text-md">
                Get the latest industry insights, network updates, and exclusive
                opportunities delivered directly to your inbox.
              </TextP>
              <div className="flex flex-wrap gap-4 mt-6 items-start">
                <Badge
                  bgColor="transparent"
                  textColor="text-white/90"
                  dotColor="bg-primary"
                  className="my-0 px-0 py-0"
                >
                  Weekly Updates
                </Badge>
                <Badge
                  bgColor="transparent"
                  textColor="text-white/90"
                  dotColor="bg-primary"
                  className="my-0 px-0 py-0"
                >
                  Industry Insights
                </Badge>
                <Badge
                  bgColor="transparent"
                  textColor="text-white/90"
                  dotColor="bg-primary"
                  className="my-0 px-0 py-0"
                >
                  Networking Tips
                </Badge>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 text-black placeholder:text-muted-foreground bg-white w-full rounded-sm"
                />
                <Button className="h-12 shrink-0 w-full sm:w-auto flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-white/80">
                Join 10,000+ logistics professionals. No spam, unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
