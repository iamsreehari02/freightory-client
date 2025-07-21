"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type InlineDetailProps = {
  children: ReactNode;
  className?: string;
};

export default function InlineDetail({
  children,
  className,
}: InlineDetailProps) {
  return (
    <span
      className={cn(
        "font-light  text-[16px] leading-[26px] text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
