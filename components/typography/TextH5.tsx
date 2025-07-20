import { cn } from "@/lib/utils";

export default function TextH5({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={cn(
        "text-[24px] font-['Clash_Display',sans-serif] font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h5>
  );
}
