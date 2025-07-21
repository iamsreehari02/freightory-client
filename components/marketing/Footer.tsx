"use client";

import Image from "next/image";
import Link from "next/link";
import TextP from "../typography/TextP";
import TextH6 from "../typography/TextH6";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyLinks, navigationLinks, supportLinks } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#090815] text-white pt-16">
      <div className="max-w-7xl  px-6 mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 pb-12">
        {/* Logo + Info */}
        <div className="md:col-span-2 space-y-6">
          <Image
            src="/assets/footerLogo.svg"
            alt="logo"
            width={219}
            height={40}
          />
          <TextP className="text-sm text-white/80 max-w-md">
            The premier global network connecting freight forwarders, NVOCCs,
            and logistics professionals worldwide.
          </TextP>

          <div className="space-y-3 text-sm mt-2">
            <p className="flex items-center gap-3 text-white/80">
              <Mail className="w-4 h-4 text-white" />
              support@yourcompany.com
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-white" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-white" />
              Mumbai, India
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <TextH6 className="text-base font-semibold">Company</TextH6>
          <ul className="space-y-6 text-sm text-white/80">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <TextH6 className="text-base font-semibold">Navigation</TextH6>
          <ul className="space-y-6 text-sm text-white/80">
            {navigationLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <TextH6 className="text-base font-semibold">Support</TextH6>
          <ul className="space-y-6 text-sm text-white/80">
            {supportLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-white/10 max-w-7xl mx-auto" />

      {/* Bottom copyright + icons */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-2">
        <p className="text-sm text-white/60">
          © 2024 Global Freight Network. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {/* You can replace these spans with your icon components */}
          <span className="w-5 h-5 bg-white/20 rounded-full" />
          <span className="w-5 h-5 bg-white/20 rounded-full" />
          <span className="w-5 h-5 bg-white/20 rounded-full" />
          <span className="w-5 h-5 bg-white/20 rounded-full" />
        </div>
      </div>
    </footer>
  );
}
