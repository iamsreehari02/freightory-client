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

export const latestMembers = [
  {
    name: "IMEX SHIPPING & LOGISTICS LLC",
    role: "NVOCC",
    avatarUrl: "/assets/member.svg",
    location: "United Arab Emirates",
    address:
      "Zainal Mobebi Plaza, Office Number -108 1st Floor, Opposite to Burjuman Mall, Near to Park Regis Hotel - Al Karama - Dubai - United Arab Emirates",
    phone: "+91 98765 43210",
    website: "https://logimehta.in",
    roleBG: "#10B98121",
    roleFontColor: "#10B981",
  },
  {
    name: "IMEX SHIPPING & LOGISTICS LLC",
    role: "Freight Forwarder",
    avatarUrl: "/assets/member.svg",
    location: "Mumbai, India",
    address:
      "Zainal Mobebi Plaza, Office Number -108 1st Floor, Opposite to Burjuman Mall, Near to Park Regis Hotel - Al Karama - Dubai - United Arab Emirates",
    phone: "+91 98765 43210",
    website: "https://logimehta.in",
    roleBG: "#3B82F621",
    roleFontColor: "#3B82F6",
  },
  {
    name: "IMEX SHIPPING & LOGISTICS LLC",
    role: "NVOCC",
    avatarUrl: "/assets/member.svg",
    location: "United Arab Emirates",
    address:
      "Zainal Mobebi Plaza, Office Number -108 1st Floor, Opposite to Burjuman Mall, Near to Park Regis Hotel - Al Karama - Dubai - United Arab Emirates",
    phone: "+91 98765 43210",
    website: "https://logimehta.in",
    roleBG: "#10B98121",
    roleFontColor: "#10B981",
  },
  {
    name: "IMEX SHIPPING & LOGISTICS LLC",
    role: "Freight Forwarder",
    avatarUrl: "/assets/member.svg",
    location: "Mumbai, India",
    address:
      "Zainal Mobebi Plaza, Office Number -108 1st Floor, Opposite to Burjuman Mall, Near to Park Regis Hotel - Al Karama - Dubai - United Arab Emirates",
    phone: "+91 98765 43210",
    website: "https://logimehta.in",
    roleBG: "#3B82F621",
    roleFontColor: "#3B82F6",
  },
];

export const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
];

export const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "Join Network", href: "#" },
  { label: "Find Partners", href: "#" },
  { label: "Events", href: "#" },
];

export const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];
