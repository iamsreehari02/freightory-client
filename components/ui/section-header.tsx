"use client";

import { ReactNode } from "react";
import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description: string;
  className?: string;
  align?: "center" | "left" | "right";
};

export default function SectionHeader({
  title,
  description,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  }[align];

  return (
    <div className={cn("max-w-2xl mx-auto mb-10", alignment, className)}>
      <TextH3>{title}</TextH3>
      <TextP className="mt-2 text-muted-foreground mx-auto">
        {description}
      </TextP>
    </div>
  );
}
