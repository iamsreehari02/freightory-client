"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn, navLinks } from "@/lib/utils";
import { NavLink } from "@/components/ui/nav-link";
import MobileNav from "./MobileNav";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/40 backdrop-blur-sm py-4  supports-[backdrop-filter]:bg-white/90",
        className
      )}
    >
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-xl font-display font-bold text-primary">
          <Image
            src="/assets/landing-logo.svg"
            alt="Logo"
            width={219}
            height={40}
          />
        </Link>

        <nav className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
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

        <MobileNav />
      </div>
    </header>
  );
}
