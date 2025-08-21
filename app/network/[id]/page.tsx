"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import { getCompanyById } from "@/services/api/company";
import { Company } from "@/types/company";
import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import {
  Home,
  Globe,
  User,
  Briefcase,
  Link as LinkIcon,
  MapPin,
  ArrowLeft,
  Mail,
  Phone,
  Lock,
  LockKeyhole,
} from "lucide-react";
import { AvatarFallback } from "@/components/ui/AvatarFallback";
import Link from "next/link";

// ShadCN table components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export default function CompanyDetailPage() {
  const id = useParams().id as string;

  // ----------- hooks always declared first ----------
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination data: always compute safely
  const paginatedDetails = useMemo(() => {
    if (!company?.details) return [];
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return company.details.slice(start, start + ITEMS_PER_PAGE);
  }, [company, currentPage]);

  const totalPages = useMemo(() => {
    if (!company?.details) return 1;
    return Math.ceil(company.details.length / ITEMS_PER_PAGE);
  }, [company]);

  // ----------- fetch company ----------
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getCompanyById(id)
      .then((data) => setCompany(data))
      .finally(() => setLoading(false));
  }, [id]);

  // ----------- early returns ----------
  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!company) return <p className="text-center py-20">Company not found.</p>;

  const fields = [
    { label: "Contact Person", value: company.contactPerson, icon: User },
    { label: "Company Name", value: company.companyName, icon: Briefcase },
    {
      label: "Type",
      value: capitalize(company.freightType.replace("_", " ")),
      icon: Globe,
    },
    { label: "Country", value: company.country, icon: Globe },
    { label: "Website", value: company.website, icon: LinkIcon, isLink: true },
    { label: "Head Office", value: company.headOfficeAddress, icon: Home },
    { label: "Branches", value: company.branchCount.toString(), icon: MapPin },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <TextP className="text-muted-foreground mb-6 flex items-center gap-3">
        <ArrowLeft className="w-6 h-6" />
        <Link href="/network" className="cursor-pointer hover:underline">
          Network
        </Link>
        <span className="mx-2">/</span>
        {company.companyName}
      </TextP>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Company info + table */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Company Card */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <AvatarFallback name={company.companyName} size={60} />
              <TextH3>{capitalize(company.companyName)}</TextH3>
            </div>

            <TextH3 className="mb-4 text-md font-semibold">
              Company Information
            </TextH3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field.label}>
                  <div className="flex items-center gap-2 mb-1">
                    <field.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-sm text-muted-foreground">
                      {field.label}
                    </span>
                  </div>
                  {field.isLink ? (
                    <a
                      href={field.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {field.value}
                    </a>
                  ) : (
                    <p className="text-sm">{field.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Branch/Container Table */}
          <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
            <TextH3 className="mb-4 text-md font-semibold">
              {company.freightType === "freight_forwarder"
                ? "Branch Details"
                : "Container Details"}
            </TextH3>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  {company.freightType === "freight_forwarder" ? (
                    <>
                      <TableHead>Name</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead>Container ID</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Available From</TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedDetails.length > 0 ? (
                  paginatedDetails.map((item: any) => (
                    <TableRow key={item._id}>
                      <TableCell>{item._id.slice(-6)}</TableCell>
                      {company.freightType === "freight_forwarder" ? (
                        <>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.city}</TableCell>
                          <TableCell>{item.country}</TableCell>
                          <TableCell>{item.contactPerson}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{item.containerId}</TableCell>
                          <TableCell>{capitalize(item.country)}</TableCell>
                          <TableCell>
                            {formatDate(item.availableFrom)}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={
                        company.freightType === "freight_forwarder" ? 8 : 5
                      }
                      className="text-center text-muted-foreground py-4"
                    >
                      No data found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Prev
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      size="sm"
                      variant={page === currentPage ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
                <Button
                  size="sm"
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 items-center text-center">
            <LockKeyhole className="w-8 h-8 text-primary mx-auto" />
            <TextH3 className="text-md font-semibold">Login Required</TextH3>
            <TextP className="text-sm text-muted-foreground">
              You must be logged in to send a message to this company. Please
              login to access messaging features.
            </TextP>
            <Button size="sm" asChild className="w-full">
              <a
                href="https://app.indlognetwork.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center"
              >
                Login
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
