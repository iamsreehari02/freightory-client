import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
