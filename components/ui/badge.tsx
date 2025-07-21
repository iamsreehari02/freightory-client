"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  showDot?: boolean;
  dotColor?: string;
  className?: string;
};

export default function Badge({
  children,
  bgColor = "bg-[#6467F21A]",
  textColor = "text-primary",
  showDot = true,
  dotColor = "bg-[#10B981]",
  className = "",
}: BadgeProps) {
  return (
    <div
      className={cn(
        "w-max mx-auto px-4 py-0.5 my-14 rounded-2xl",
        bgColor,
        className
      )}
    >
      <p
        className={cn("text-center text-md flex items-center gap-2", textColor)}
      >
        {showDot && (
          <span className={cn("w-2 h-2 rounded-full inline-block", dotColor)} />
        )}
        {children}
      </p>
    </div>
  );
}
