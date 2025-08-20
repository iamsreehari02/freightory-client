"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export function NavLink({ href, children, newTab }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={cn(
        "transition-colors",
        isActive
          ? "text-primary font-semibold border-b-2 border-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
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
