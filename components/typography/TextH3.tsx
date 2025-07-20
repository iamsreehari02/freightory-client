import { cn } from "@/lib/utils";

export default function TextH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-[48px] font-['Clash_Display',sans-serif] font-bold leading-tight tracking-tight whitespace-pre-line",
        className
      )}
    >
      {children}
    </h3>
  );
}
