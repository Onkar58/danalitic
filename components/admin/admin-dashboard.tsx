"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "./admin-header";
import { StatCards } from "./stat-cards";
import { ContactQueriesTable, ContactQuery } from "./contact-queries-table";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function AdminDashboard() {
  const [queries, setQueries] = useState<ContactQuery[]>([]);
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

        setQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);
  // Calculate stats
  const totalQueries = queries.length;
  const lastUpdated = queries.length > 0 ? queries[0].createdAt : new Date();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <AdminHeader />
        <StatCards
          totalQueries={totalQueries}
          responsePending={Math.floor(totalQueries * 0.6)}
          lastUpdated={lastUpdated}
        />
        <ContactQueriesTable data={queries} />
      </div>
    </div>
  );
}
