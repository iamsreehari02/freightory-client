import { cn } from "@/lib/utils";

export default function TextH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-[68px] font-['Clash_Display',sans-serif] font-bold leading-[120%] tracking-[0.02em] align-middle whitespace-pre-line",
        className
      )}
    >
      {children}
    </h1>
  );
}
