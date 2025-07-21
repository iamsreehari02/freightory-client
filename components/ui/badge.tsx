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

function isHex(value?: string) {
  return typeof value === "string" && value.startsWith("#");
}

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
      className={cn("w-max mx-auto px-4 py-0.5 my-14 rounded-2xl", className)}
      style={{
        backgroundColor: isHex(bgColor) ? bgColor : undefined,
      }}
    >
      <p
        className={cn(
          "text-center text-md flex items-center gap-2",
          !isHex(textColor) && textColor
        )}
        style={{
          color: isHex(textColor) ? textColor : undefined,
        }}
      >
        {showDot && (
          <span
            className={cn("w-2 h-2 rounded-full", !isHex(dotColor) && dotColor)}
            style={{
              backgroundColor: isHex(dotColor) ? dotColor : undefined,
            }}
          />
        )}
        {children}
      </p>
    </div>
  );
}
