"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionHeader from "@/components/ui/section-header";
import { LockKeyhole } from "lucide-react";

const LOGIN_LINK = "https://app.indlognetwork.com/login";

const containerData = [
  {
    country: "India",
    port: "Nhava Sheva",
    containers: "20 x 40HC",
    specialRates: "Available",
    lastUpdate: "2 hours ago",
    link: LOGIN_LINK,
  },
  {
    country: "UAE",
    port: "Jebel Ali",
    containers: "15 x 20GP",
    specialRates: "N/A",
    lastUpdate: "5 hours ago",
    link: LOGIN_LINK,
  },
  {
    country: "Singapore",
    port: "PSA Singapore",
    containers: "30 x 40HC",
    specialRates: "Available",
    lastUpdate: "1 day ago",
    link: LOGIN_LINK,
  },
];

export default function RecentContainerAvailability() {
  return (
    <section className="w-full py-20 bg-[#FBFBFE]">
      <SectionHeader
        title="Recent Container Availability"
        description="Live updates from our verified NVOCC partners worldwide"
        className="mb-12 max-w-4xl"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="border rounded-xl shadow-md overflow-hidden">
          <Table className="border rounded-xl shadow-md overflow-hidden">
            <TableHeader className="bg-[#F1F5F9]">
              <TableRow>
                <TableHead className="px-4 py-3">Country</TableHead>
                <TableHead className="px-4 py-3">Port</TableHead>
                <TableHead className="px-4 py-3">Containers</TableHead>
                <TableHead className="px-4 py-3">Special Rates</TableHead>
                <TableHead className="px-4 py-3">Last Update</TableHead>
                <TableHead className="px-4 py-3 text-right">
                  Contact Now
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y">
              {containerData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="px-4 py-3">{row.country}</TableCell>
                  <TableCell className="px-4 py-3">{row.port}</TableCell>
                  <TableCell className="px-4 py-3">{row.containers}</TableCell>
                  <TableCell className="px-4 py-3">
                    {row.specialRates === "Available" ? (
                      <span className="text-green-600 font-medium">
                        Available
                      </span>
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3">{row.lastUpdate}</TableCell>
                  <TableCell className="px-4 py-3 text-right">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="text-primary flex items-center gap-2"
                    >
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LockKeyhole className="h-4 w-4 text-primary" />
                        <span className="text-primary">Login to Contact</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Button asChild size="sm" className="flex mx-auto mt-12 w-max">
          <a href={LOGIN_LINK} target="_blank" rel="noopener noreferrer">
            View All Containers
          </a>
        </Button>
      </div>
    </section>
  );
}
