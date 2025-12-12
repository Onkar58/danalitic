"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { Timestamp } from "firebase/firestore";

export interface ContactEnquiry {
  id?: string; // Firestore document ID (added when reading)
  name: string;
  email: string;
  phone: string;
  company: string;
  contact: string;
  industry: string;
  message: string;
  projectType: string;
  source: string;
  createdAt?: Timestamp | null; // Firestore server timestamp
}

export function QueriesTable() {
  const [queriesList, setQueriesList] = useState<ContactEnquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const q = query(
          collection(db, "contact-enquiries"),
          orderBy("createdAt", "desc"),
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQueriesList(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  if (loading) return <p className="p-10">Loading queries...</p>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Contact Queries</h1>

      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Contact</th>
              <th className="p-3 border">Industry</th>
              <th className="p-3 border">Project Type</th>
              <th className="p-3 border">Source</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Submitted On</th>
            </tr>
          </thead>

          <tbody>
            {queriesList.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-4 text-center">
                  No queries found.
                </td>
              </tr>
            ) : (
              queriesList.map((q) => (
                <tr key={q.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{q.name}</td>
                  <td className="p-3 border">{q.email}</td>
                  <td className="p-3 border">{q.phone}</td>
                  <td className="p-3 border">{q.company}</td>
                  <td className="p-3 border">{q.contact}</td>
                  <td className="p-3 border">{q.industry || "-"}</td>
                  <td className="p-3 border">{q.projectType || "-"}</td>
                  <td className="p-3 border">{q.source || "-"}</td>
                  <td className="p-3 border max-w-xs truncate">{q.message}</td>
                  <td className="p-3 border text-xs">
                    {q.createdAt?.toDate
                      ? q.createdAt.toDate().toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })
                      : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
