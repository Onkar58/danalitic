"use client";

import { useState, useMemo } from "react";
import {
  Search,
  ArrowUpDown,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Timestamp } from "firebase/firestore";
import { Eye } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  projectType: string;
  contact: string;
  phone: string;
  source: string;
  message: string;
  createdAt: Timestamp;
}

interface ContactQueriesTableProps {
  data: ContactQuery[];
}

export function ContactQueriesTable({ data }: ContactQueriesTableProps) {
  console.log({ data });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof ContactQuery>("createdAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue instanceof Date && bValue instanceof Date) {
        return sortDirection === "asc"
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return 0;
    });

    return filtered;
  }, [data, searchTerm, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSort = (field: keyof ContactQuery) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Company",
      "Industry",
      "Project Type",
      "Contact Preference",
      "Phone",
      "Source",
      "Message",
      "Created At",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredAndSortedData.map((item) =>
        [
          `"${item.name}"`,
          `"${item.email}"`,
          `"${item.company}"`,
          `"${item.industry}"`,
          `"${item.projectType}"`,
          `"${item.contact}"`,
          `"${item.phone}"`,
          `"${item.source}"`,
          `"${item.message.replace(/"/g, '""')}"`,
          `"${item.createdAt.toDate().toDateString()}"`,
        ].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `contact-queries.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Contact Queries
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {filteredAndSortedData.length}{" "}
              {filteredAndSortedData.length === 1 ? "query" : "queries"} found
            </p>
          </div>
          <Button
            onClick={exportToCSV}
            variant="outline"
            className="gap-2 bg-transparent"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>

        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead>
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Name
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Project Type</TableHead>
              <TableHead>Contact Pref</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="max-w-xs">Message</TableHead>
              <TableHead>
                <button
                  onClick={() => handleSort("createdAt")}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  Created At
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={10}
                  className="text-center py-8 text-muted-foreground"
                >
                  No queries found
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((query) => (
                <TableRow key={query.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{query.name}</TableCell>
                  <TableCell className="text-sm">{query.email}</TableCell>
                  <TableCell className="text-sm">{query.company}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {query.industry}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{query.projectType}</TableCell>
                  <TableCell className="text-sm">{query.contact}</TableCell>
                  <TableCell className="text-sm">{query.phone}</TableCell>
                  <TableCell className="text-sm">{query.source}</TableCell>
                  <TableCell className="max-w-xs">
                    <div className="flex items-start gap-2">
                      {/* Truncated preview */}
                      <div
                        className="flex-1 text-sm line-clamp-2"
                        title={query.message}
                      >
                        {query.message}
                      </div>

                      {/* View full message (Dialog) */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="mt-0.5 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition"
                            aria-label="View full message"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Full Message</DialogTitle>
                          </DialogHeader>

                          {/* Scrollable content */}
                          <div className="max-h-[60vh] overflow-y-auto pr-2">
                            <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                              {query.message}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    {query.createdAt.toDate().toDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
