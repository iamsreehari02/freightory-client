"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import { Company } from "@/types/company";
import { getAllCompanies } from "@/services/api/company";
import { AvatarFallback } from "@/components/ui/AvatarFallback";
import Link from "next/link";

const ITEMS_PER_PAGE = 6;

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const NetworkPage = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllCompanies();
      setCompanies(data);
      setFilteredCompanies(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = companies.filter((c) =>
      c.companyName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCompanies(filtered);
    setCurrentPage(1);
  }, [search, companies]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const paginatedCompanies = filteredCompanies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8 text-left">
        <TextH3 className="max-w-2/3">
          Explore Our Global Logistics Network
        </TextH3>
        <TextP className="text-muted-foreground">
          Verified NVOCCs and Freight Forwarders from around the world.
        </TextP>
      </div>

      {/* Search */}
      <div className="mb-8 max-w-sm">
        <Input
          placeholder="Search by company name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCompanies.map((company: Company) => (
          <Link
            key={company._id}
            href={`/network/${company._id}`}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <AvatarFallback name={company.companyName} size={40} />
              <h4 className="font-bold text-lg underline hover:text-blue-500">
                {capitalize(company.companyName)}
              </h4>
            </div>

            <p className="text-sm text-muted-foreground">
              Contact: {capitalize(company.contactPerson)}
            </p>
            <p className="text-sm text-muted-foreground">
              Type: {capitalize(company.freightType.replace("_", " "))}
            </p>
            <p className="text-sm text-muted-foreground">
              Country: {capitalize(company.country)}
            </p>
            {company.website && (
              <p className="text-sm text-blue-600 hover:underline">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.website}
                </a>
              </p>
            )}
          </Link>
        ))}
      </div>

      {/* No results */}
      {filteredCompanies.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          No companies found.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded ${
                page === currentPage ? "bg-primary text-white" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NetworkPage;
