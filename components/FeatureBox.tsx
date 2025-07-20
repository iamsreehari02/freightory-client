import { cn } from "@/lib/utils";
import TextH5 from "./typography/TextH5";
import Image from "next/image";

interface FeatureBoxProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureBox({
  icon,
  title,
  description,
  className,
}: FeatureBoxProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-white p-5 sm:p-6 md:p-8 transition-all",
        className
      )}
      style={{ backgroundColor: "#E8E7F8" }}
    >
      <div
        className="absolute inset-0 bg-repeat opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/marketing/bg-noise.png')",
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1F1863] border-2 border-white flex items-center justify-center shadow-sm">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>

        <TextH5 className="font-semibold text-base sm:text-lg">{title}</TextH5>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
