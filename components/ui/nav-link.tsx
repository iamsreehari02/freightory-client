import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  newTab?: boolean; 
}

export function NavLink({ href, children, newTab }: NavLinkProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <Link
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    </Button>
  );
}
