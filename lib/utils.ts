import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Network", href: "#network" },
  { label: "Contact Us", href: "#contact" },
];

export const features = [
  {
    icon: "/assets/global.svg",
    title: "Global Reach",
    description:
      "Expand your reach by connecting with verified freight partners worldwide.",
  },
  {
    icon: "/assets/verified.svg",
    title: "Verified Agents",
    description:
      "Every member is vetted to maintain a high standard of professionalism.",
  },
  {
    icon: "/assets/timer.svg",
    title: "Real-Time Connect",
    description:
      "Collaborate confidently with built-in tools that protect both parties.",
  },
  {
    icon: "/assets/network.svg",
    title: "Expert Network",
    description:
      "Simplify communication and coordination with shared digital workspaces.",
  },
];
