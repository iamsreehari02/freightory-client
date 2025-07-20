import { cn } from "@/lib/utils";

export default function TextP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-lg font-inter text-muted-foreground max-w-prose",
        className
      )}
    >
      {children}
    </p>
  );
}
