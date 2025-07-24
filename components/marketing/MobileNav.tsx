"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/utils";
import { NavLink } from "@/components/ui/nav-link";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[260px] px-6 pt-10">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(
                  "https://freightory-dashboard-client-h8ep.vercel.app/register",
                  "_blank"
                )
              }
            >
              Join Now
            </Button>
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  "https://freightory-dashboard-client-h8ep.vercel.app/login",
                  "_blank"
                )
              }
            >
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
